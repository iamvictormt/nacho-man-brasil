"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCheck, UserRound, X } from "lucide-react";
import { FRANCHISE_WHATSAPP_URL } from "@/lib/links";

function WhatsappMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M16.04 3.2A12.7 12.7 0 0 0 5.2 22.5L3.5 28.8l6.45-1.7a12.74 12.74 0 0 0 6.08 1.54h.01A12.72 12.72 0 0 0 16.04 3.2Zm0 23.3a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.82 1 1.02-3.72-.25-.4A10.58 10.58 0 1 1 16.04 26.5Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.54 9.54 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function FranchiseWhatsapp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="nm-whatsapp" aria-label="Atendimento sobre filiais">
      {isOpen ? (
        <div
          id="franchise-whatsapp-message"
          className="nm-whatsapp-card"
          role="dialog"
          aria-label="Converse sobre abrir uma filial"
        >
          <div className="nm-whatsapp-card-top">
            <span className="nm-whatsapp-avatar" aria-hidden="true">
              <UserRound className="nm-whatsapp-avatar-icon" strokeWidth={2.25} />
              <i className="nm-whatsapp-avatar-status" />
            </span>
            <div>
              <strong>Nacho Man · Expansão</strong>
              <span>online</span>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Fechar conversa">
              <X size={18} />
            </button>
          </div>

          <div className="nm-whatsapp-chat">
            <span className="nm-whatsapp-day">Hoje</span>
            <div className="nm-whatsapp-message">
              <p>Olá! 👋</p>
              <p><strong>Já pensou em levar a Nacho Man para a sua cidade?</strong></p>
              <p>Nosso time pode te explicar como funciona e tirar todas as suas dúvidas sobre abrir uma filial.</p>
              <span className="nm-whatsapp-time">
                10:32 <CheckCheck size={15} aria-label="Mensagem lida" />
              </span>
            </div>

            <a
              href={FRANCHISE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="nm-whatsapp-cta"
            >
              <WhatsappMark className="nm-whatsapp-cta-icon" />
              Conversar no WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <small>Você será direcionado para o WhatsApp</small>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="nm-whatsapp-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Você tem uma mensagem. Falar sobre abrir uma filial"
          aria-expanded="false"
          aria-controls="franchise-whatsapp-message"
        >
          <WhatsappMark className="nm-whatsapp-trigger-icon" />
          <span aria-hidden="true">1</span>
        </button>
      )}
    </aside>
  );
}
