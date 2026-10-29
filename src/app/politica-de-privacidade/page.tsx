import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Política de privacidade | Nacho Man",
  description: "Consulte a política de privacidade do site Nacho Man.",
};

const sections = [
  {
    id: "dados-coletados",
    title: "Dados coletados",
    paragraphs: [
      "Os dados dependem da sua interação. O formulário de experiência pode solicitar nome, WhatsApp, como você conheceu o Nacho Man e seus consentimentos. A inscrição na newsletter solicita e-mail. O formulário de franquia pode solicitar nome, telefone, e-mail, cidade, estado, faixa de investimento e uma mensagem opcional.",
      "Ao navegar, a infraestrutura que entrega o site também pode processar dados técnicos, como endereço IP, tipo de navegador e horário de acesso, conforme as configurações dos serviços utilizados.",
    ],
  },
  {
    id: "finalidades",
    title: "Como usamos os dados",
    paragraphs: [
      "Utilizamos as informações para responder a solicitações, registrar contatos e avaliações, atender interessados em franquia, administrar inscrições na newsletter e manter o site e os canais funcionando.",
      "O envio de novidades e promoções pelo WhatsApp ocorre quando você escolhe essa opção. O tratamento é realizado para a finalidade informada no momento da coleta e conforme a hipótese legal aplicável. Quando baseado em consentimento, você pode revogá-lo.",
    ],
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento e serviços externos",
    paragraphs: [
      "As informações enviadas pelo formulário de contato e experiência são armazenadas no Google Forms e em uma planilha vinculada do Google Planilhas, para organizar os contatos recebidos. O formulário de franquia abre o WhatsApp com as informações preenchidas na mensagem; você decide se deseja enviá-la.",
      "Links para pedidos, WhatsApp, Google Maps e redes sociais levam a serviços de terceiros, que podem tratar dados conforme seus próprios avisos de privacidade. Consulte esses avisos ao utilizar cada serviço.",
    ],
  },
  {
    id: "retencao-e-seguranca",
    title: "Retenção e segurança",
    paragraphs: [
      "Mantemos os dados pelo período necessário para atender às finalidades descritas, cumprir obrigações aplicáveis e proteger direitos. O período pode variar conforme o tipo de contato e os serviços envolvidos.",
      "Adotamos medidas razoáveis para proteger as informações contra acesso, alteração ou divulgação indevidos. Nenhum meio de transmissão ou armazenamento é totalmente livre de riscos.",
    ],
  },
  {
    id: "seus-direitos",
    title: "Seus direitos",
    paragraphs: [
      "Nos termos da legislação de proteção de dados, você pode solicitar confirmação e acesso ao tratamento, correção de dados incompletos ou incorretos, informações sobre compartilhamento e, quando aplicável, anonimização, bloqueio ou eliminação. Também pode revogar consentimentos, respeitadas as hipóteses legais de conservação.",
      "Para exercer seus direitos ou tirar dúvidas, entre em contato pelos canais oficiais na página de contato. Podemos solicitar informações para confirmar sua identidade e localizar os dados relacionados ao pedido.",
    ],
  },
  {
    id: "atualizacoes",
    title: "Atualizações desta política",
    paragraphs: [
      "Esta política pode ser atualizada para refletir mudanças nos tratamentos de dados ou nos serviços do site. Consulte esta página para acessar a versão vigente.",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Política de"
      accent="privacidade."
      summary="Saiba quais dados podem ser tratados nos formulários e canais digitais do Nacho Man e como solicitar seus direitos."
      sections={sections}
    />
  );
}
