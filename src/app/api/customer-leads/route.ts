import { NextResponse } from "next/server";
import { z } from "zod";

const formViewUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSejr4K65i4SA2utsnSSt6mQnOVseJ8sZ0Asi2O7BbU9g7ohkg/viewform";
const formResponseUrl = formViewUrl.replace("/viewform", "/formResponse");
const confirmationMessage = "Obrigado! Seus dados foram recebidos.";

const allowedOrigins = [
  "Instagram",
  "Google",
  "TikTok",
  "Indicação de alguém",
  "Vi em uma unidade",
  "Outro",
] as const;

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  whatsapp: z.string().trim().min(10).max(24),
  origin: z.enum(allowedOrigins),
  dataUseConsent: z.literal(true),
  whatsappMarketingConsent: z.boolean(),
});

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function getAttributes(inputTag: string) {
  const attributes = new Map<string, string>();

  for (const match of inputTag.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    attributes.set(match[1].toLowerCase(), decodeHtmlEntities(match[2] ?? match[3] ?? ""));
  }

  return attributes;
}

function getHiddenFields(html: string) {
  const fields = new URLSearchParams();

  for (const match of html.matchAll(/<input\b[^>]*>/gi)) {
    const attributes = getAttributes(match[0]);
    const name = attributes.get("name");

    if (attributes.get("type") === "hidden" && name) {
      fields.append(name, attributes.get("value") ?? "");
    }
  }

  return fields;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Não foi possível ler os dados enviados." }, { status: 400 });
  }

  const result = leadSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      { message: "Confira os campos e autorize o contato para continuar." },
      { status: 422 },
    );
  }

  const phoneDigits = result.data.whatsapp.replace(/\D/g, "");

  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    return NextResponse.json(
      { message: "Informe um WhatsApp válido com DDD." },
      { status: 422 },
    );
  }

  try {
    const formPageResponse = await fetch(formViewUrl, {
      cache: "no-store",
      headers: { Accept: "text/html" },
      signal: AbortSignal.timeout(10_000),
    });

    if (!formPageResponse.ok) throw new Error("Google Form unavailable");

    const formPage = await formPageResponse.text();
    const responseFields = getHiddenFields(formPage);

    if (!responseFields.has("fbzx")) throw new Error("Google Form token unavailable");

    responseFields.set("entry.2005620554", result.data.name);
    responseFields.set("entry.1045781291", result.data.whatsapp);
    responseFields.set("entry.1065046570", result.data.origin);
    responseFields.set("entry.558275814", "Sim, autorizo");

    if (result.data.whatsappMarketingConsent) {
      responseFields.set("entry.1110447335", "Sim, quero receber");
    }

    const googleResponse = await fetch(formResponseUrl, {
      method: "POST",
      cache: "no-store",
      redirect: "follow",
      headers: {
        Accept: "text/html",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Referer: formViewUrl,
      },
      body: responseFields.toString(),
      signal: AbortSignal.timeout(15_000),
    });

    const confirmationPage = await googleResponse.text();

    if (!googleResponse.ok || !confirmationPage.includes(confirmationMessage)) {
      throw new Error("Google Form did not confirm the response");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Não conseguimos receber seus dados agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }
}
