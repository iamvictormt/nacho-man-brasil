"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Star } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./links.module.css";

const googleReviewsUrl = "https://www.google.com/maps/search/?api=1&query=Nacho+Man+Mexican+Food";
const customerLeadEndpoint = "/api/customer-leads";

type FormStatus = "idle" | "sending" | "success" | "error";

function formatWhatsapp(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("55") && digits.length > 11) digits = digits.slice(2);
  digits = digits.slice(0, 11);

  if (digits.length <= 2) return digits ? `(${digits}` : "";

  const areaCode = digits.slice(0, 2);
  const number = digits.slice(2);
  const splitAt = number.length > 8 ? 5 : 4;
  const formattedNumber =
    number.length > 4
      ? `${number.slice(0, splitAt)}-${number.slice(splitAt)}`
      : number;

  return `(${areaCode}) ${formattedNumber}`;
}

export function FeedbackFlow() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    setCustomerName(name);
    setStatus("sending");

    try {
      const response = await fetch(customerLeadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsapp: String(formData.get("whatsapp") ?? "").trim(),
          origin: String(formData.get("origin") ?? ""),
          dataUseConsent: formData.get("data_use_consent") === "yes",
          whatsappMarketingConsent:
            formData.get("whatsapp_marketing_consent") === "yes",
        }),
      });

      if (!response.ok) throw new Error("Customer form submission failed");

      form.reset();
      setStatus("success");
      window.location.assign(googleReviewsUrl);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.feedbackFlow}>
      <button
        type="button"
        className={`${styles.linkTile} ${styles.tileFeedback} ${styles.feedbackTrigger}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="customer-feedback-form"
      >
        <span className={styles.feedbackVisual} aria-hidden="true">
          <Star size={22} />
        </span>
        <span className={styles.feedbackTriggerCopy}>
          <span className={styles.feedbackTriggerTitle}>Compartilhe sua experiência</span>
        </span>
        <span className={styles.tileArrow} aria-hidden="true">
          <ArrowUpRight
            className={styles.feedbackArrow}
            size={19}
            aria-hidden="true"
          />
        </span>
      </button>

      <div className={styles.feedbackPanel} id="customer-feedback-form" hidden={!isOpen}>
        {status === "success" ? (
          <div className={styles.feedbackSuccess} role="status" aria-live="polite">
            <p className={styles.feedbackMessage}>
              Obrigado{customerName ? `, ${customerName}` : ""}! Seus dados foram recebidos.
            </p>
            <p className={styles.feedbackHelp}>
              Continue para avaliar sua experiência no Google.
            </p>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.feedbackReviewLink}
            >
              <Star size={18} aria-hidden="true" />
              Continuar para avaliar no Google
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        ) : (
          <>
            <form
              className={styles.feedbackForm}
              id="customer-feedback-form-fields"
              onSubmit={handleSubmit}
              aria-busy={status === "sending"}
            >
              <label className={styles.feedbackLabel} htmlFor="customer-name">
                Seu nome
                <Input
                  className={styles.feedbackInput}
                  id="customer-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={status === "sending"}
                />
              </label>

              <label className={styles.feedbackLabel} htmlFor="customer-whatsapp">
                WhatsApp
                <Input
                  className={styles.feedbackInput}
                  id="customer-whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  placeholder="(00) 00000-0000"
                  onChange={(event) => {
                    event.currentTarget.value = formatWhatsapp(event.currentTarget.value);
                  }}
                  required
                  disabled={status === "sending"}
                />
              </label>

              <div className={styles.feedbackLabel}>
                <label htmlFor="customer-origin">Como você conheceu o Nacho Man?</label>
                <Select
                  name="origin"
                  defaultValue=""
                  required
                  disabled={status === "sending"}
                >
                  <SelectTrigger id="customer-origin" className={styles.feedbackInput}>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="TikTok">TikTok</SelectItem>
                    <SelectItem value="Indicação de alguém">Indicação de alguém</SelectItem>
                    <SelectItem value="Vi em uma unidade">Vi em uma unidade</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={styles.feedbackConsent}>
                <Checkbox
                  id="customer-data-use-consent"
                  name="data_use_consent"
                  value="yes"
                  required
                  disabled={status === "sending"}
                  className={styles.feedbackConsentCheckbox}
                />
                <label htmlFor="customer-data-use-consent">
                  Autorizo o Nacho Man a me contatar pelo WhatsApp e usar a informação de origem para
                  entender como conheci a marca.
                </label>
              </div>

              <div className={styles.feedbackConsent}>
                <Checkbox
                  id="customer-marketing-consent"
                  name="whatsapp_marketing_consent"
                  value="yes"
                  disabled={status === "sending"}
                  className={styles.feedbackConsentCheckbox}
                />
                <label htmlFor="customer-marketing-consent">
                  Quero receber novidades e promoções do Nacho Man pelo WhatsApp.
                </label>
              </div>

              <p className={styles.feedbackPrivacy}>
                Seus dados serão armazenados no Google Forms e em uma planilha vinculada.{" "}
                <a href="/politica-de-privacidade">Leia a política de privacidade</a>.
              </p>

              {status === "error" && (
                <p className={styles.feedbackError} role="alert">
                  Não conseguimos enviar agora. Seus dados continuam no formulário; tente novamente.
                </p>
              )}

              <button
                className={styles.feedbackSubmit}
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando…" : "Continuar para avaliar no Google"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </form>
            <p className={styles.feedbackSkip}>
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Prefiro ir direto ao Google para avaliar
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
