"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCheck, UserRound, X } from "lucide-react";

import { FRANCHISE_WHATSAPP_URL } from "@/lib/links";

function WhatsappMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.04 3.2A12.7 12.7 0 0 0 5.2 22.5L3.5 28.8l6.45-1.7a12.74 12.74 0 0 0 6.08 1.54h.01A12.72 12.72 0 0 0 16.04 3.2Zm0 23.3a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.82 1 1.02-3.72-.25-.4A10.58 10.58 0 1 1 16.04 26.5Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.54 9.54 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function FranchiseWhatsapp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-60 font-sans sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-6"
      aria-label="Atendimento sobre filiais"
    >
      {isOpen ? (
        <div
          id="franchise-whatsapp-message"
          className="max-h-[calc(100dvh-2rem-env(safe-area-inset-bottom))] w-[min(360px,calc(100vw-2rem))] origin-bottom-right overflow-x-hidden overflow-y-auto rounded-[1.5rem_1.5rem_.35rem_1.5rem] border border-[#245c52]/20 bg-[#f2eee2] text-[#26332f] shadow-[0_22px_64px_oklch(0_0_0/0.26)] motion-safe:animate-[chat-in_620ms_cubic-bezier(0.16,1,0.3,1)_both]"
          role="dialog"
          aria-label="Converse sobre abrir uma filial"
        >
          <div className="grid min-h-17 grid-cols-[auto_1fr_auto] items-center gap-3 bg-[#27685e] px-3.5 py-3 text-white">
            <span
              className="relative grid size-11 place-items-center rounded-full bg-white text-[#27685e]"
              aria-hidden="true"
            >
              <UserRound className="size-5" strokeWidth={2.25} />
              <i className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-[#25d366]" />
            </span>
            <div>
              <strong className="block text-[0.82rem] font-extrabold">Equipe Nacho Man</strong>
              <span className="mt-0.5 block text-[0.67rem] text-white/75">online</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar conversa"
              className="grid size-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <X size={18} />
            </button>
          </div>

          <div className="min-h-72 bg-[#f2eee2] bg-[radial-gradient(circle_at_12px_12px,rgba(39,104,94,.05)_1px,transparent_1.5px),radial-gradient(circle_at_33px_30px,rgba(39,104,94,.04)_1.5px,transparent_2px)] bg-size-[44px_44px] p-3">
            <span className="mx-auto mb-3 block w-fit rounded-md bg-white/90 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-[#60716b] shadow-sm">
              Hoje
            </span>
            <div className="relative w-[92%] rounded-[.25rem_.75rem_.75rem_.75rem] bg-white px-3 py-3 text-[0.76rem] leading-relaxed shadow-sm after:absolute after:-left-2 after:top-0 after:size-3 after:bg-white after:[clip-path:polygon(100%_0,100%_100%,0_0)]">
              <p className="mb-1.5 text-[0.82rem]">Olá! 👋</p>
              <p className="mb-1.5">
                <strong>Já pensou em levar a Nacho Man para a sua cidade?</strong>
              </p>
              <p>
                Nosso time pode te explicar como funciona e tirar todas as suas dúvidas sobre abrir
                uma filial.
              </p>
              <span className="mt-1 flex items-center justify-end gap-1 text-[0.57rem] text-[#71817c]">
                10:32 <CheckCheck size={15} className="text-sky-500" aria-label="Mensagem lida" />
              </span>
            </div>

            <a
              href={FRANCHISE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 grid min-h-12 grid-cols-[auto_1fr_auto] items-center rounded-xl bg-[#25d366] px-4 py-3 text-center text-[0.68rem] font-extrabold uppercase text-[#173d2a] shadow-md transition hover:-translate-y-0.5 hover:bg-[#20bd5b] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary text-background"
            >
              <WhatsappMark className="size-5" />
              Conversar no WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <small className="mt-2 block text-center text-[0.56rem] text-[#60716b]">
              Você será direcionado para o WhatsApp
            </small>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="relative grid size-15 place-items-center rounded-full border-2 border-white bg-[#25d366] text-white shadow-[0_14px_34px_oklch(0_0_0/0.28)] transition hover:-translate-y-1 hover:-rotate-3 hover:bg-[#20bd5b] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary sm:size-16"
          onClick={() => setIsOpen(true)}
          aria-label="Você tem uma mensagem. Falar sobre abrir uma filial"
          aria-expanded="false"
          aria-controls="franchise-whatsapp-message"
        >
          <WhatsappMark className="size-8" />
          <span
            className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full border-2 border-white bg-accent text-[0.62rem] font-extrabold text-accent-foreground motion-safe:animate-[ping_1.5s_linear_infinite]"
            aria-hidden="true"
          >
            1
          </span>
        </button>
      )}
    </aside>
  );
}
