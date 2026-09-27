"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_URL } from "@/lib/links";

type FormStatus = "idle" | "whatsapp";

const labelClass =
  "grid gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-foreground/70";

export function FranchiseForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Olá! Quero saber mais sobre a franquia Nacho Man.",
      "",
      `Nome: ${formData.get("nome")}`,
      `WhatsApp: ${formData.get("telefone")}`,
      `E-mail: ${formData.get("email")}`,
      `Cidade desejada: ${formData.get("cidade")}/${formData.get("estado")}`,
      `Investimento disponível: ${formData.get("capital")}`,
      formData.get("mensagem") ? `Mensagem: ${formData.get("mensagem")}` : "",
    ]
      .filter((line, index) => index === 1 || Boolean(line))
      .join("\n");

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("whatsapp");
  };

  return (
    <form
      id="formulario-franquia"
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-background p-6 text-foreground shadow-[0_28px_80px_oklch(0.12_0_0/0.24)] sm:p-9 lg:p-10"
    >

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Nome completo
          <Input name="nome" autoComplete="name" required placeholder="Seu nome" />
        </label>
        <label className={labelClass}>
          WhatsApp
          <Input
            name="telefone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(00) 00000-0000"
          />
        </label>
        <label className={labelClass}>
          E-mail
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="voce@email.com"
          />
        </label>
        <label className={labelClass}>
          Cidade desejada
          <Input name="cidade" required placeholder="Ex.: Florianópolis" />
        </label>
        <label className={labelClass}>
          Estado
          <Input name="estado" required maxLength={2} placeholder="UF" className="uppercase" />
        </label>
        <div className={labelClass}>
          <label htmlFor="capital">Valor de investimento disponível</label>
          <Select name="capital" required>
            <SelectTrigger id="capital" className="w-full">
              <SelectValue placeholder="Selecione uma faixa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="R$ 169 mil a R$ 250 mil">R$ 169 mil a R$ 250 mil</SelectItem>
              <SelectItem value="R$ 250 mil a R$ 350 mil">R$ 250 mil a R$ 350 mil</SelectItem>
              <SelectItem value="Mais de R$ 350 mil">Mais de R$ 350 mil</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <label className={`${labelClass} mt-5`}>
        Quer contar mais alguma coisa?
        <Textarea
          name="mensagem"
          placeholder="Fale sobre sua cidade, experiência ou momento atual."
        />
      </label>

      <div className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
        <Checkbox
          id="consentimento"
          name="consentimento"
          value="autorizado"
          required
          className="mt-0.5 size-5 rounded-md border-foreground/25"
        />
        <label htmlFor="consentimento" className="cursor-pointer">
          Autorizo o contato da equipe Nacho Man sobre oportunidades de franquia.
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="ink" size="pill" className="min-h-13 gap-5 px-6">
          Enviar pelo WhatsApp
          <MessageCircle className="size-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-5 min-h-6 text-sm" aria-live="polite">
        {status === "whatsapp" && (
          <p className="flex items-center gap-2 font-bold text-foreground">
            <MessageCircle className="size-5 text-primary" /> Abrimos o WhatsApp com seus dados
            preenchidos.
          </p>
        )}
      </div>
    </form>
  );
}
