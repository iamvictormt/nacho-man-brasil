import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Termos de uso | Nacho Man",
  description: "Consulte os termos de uso do site Nacho Man.",
};

const sections = [
  {
    id: "uso-do-site",
    title: "Uso do site",
    paragraphs: [
      "Você pode navegar pelo site para conhecer a marca, consultar informações e acessar nossos canais. Ao utilizar esses recursos, compromete-se a agir de forma lícita, respeitar os direitos de terceiros e fornecer informações verdadeiras quando preencher um formulário.",
    ],
  },
  {
    id: "cardapio-e-pedidos",
    title: "Cardápio e pedidos",
    paragraphs: [
      "Cardápios, preços, promoções, horários e disponibilidade podem variar de acordo com a unidade e o canal de atendimento. Antes de concluir um pedido, confira os itens, valores, condições e prazo apresentados no canal escolhido.",
      "As ofertas seguem as condições informadas na respectiva divulgação. A confirmação do pedido e os detalhes de pagamento, entrega ou retirada são apresentados no canal de compra utilizado.",
    ],
  },
  {
    id: "marca-e-conteudo",
    title: "Marca e conteúdo",
    paragraphs: [
      "Textos, fotografias, ilustrações, logotipos e demais elementos do site pertencem ao Nacho Man ou são usados com autorização. A reprodução, distribuição ou utilização comercial depende de autorização prévia, salvo nas hipóteses permitidas pela legislação.",
    ],
  },
  {
    id: "servicos-externos",
    title: "Links e serviços externos",
    paragraphs: [
      "O site pode direcionar você a serviços de terceiros, como plataformas de pedidos, WhatsApp, Google Maps e redes sociais. Ao sair do site, passam a valer também os termos e avisos de privacidade desses serviços, que são administrados por seus respectivos responsáveis.",
    ],
  },
  {
    id: "alteracoes-e-contato",
    title: "Alterações e contato",
    paragraphs: [
      "Podemos atualizar estas condições para refletir mudanças no site ou nos serviços oferecidos. A versão disponível nesta página é a referência vigente. Se tiver dúvidas, fale com a equipe pelos canais oficiais na página de contato.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <LegalDocumentPage
      title="Termos"
      accent="de uso."
      summary="Regras para utilizar o site, consultar informações e acessar os canais oficiais do Nacho Man."
      sections={sections}
    />
  );
}
