import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  FileText,
  Landmark,
  Shield,
} from "lucide-react";

export const SITE_URL = "https://eduardobremer.com.br";
export const PHONE = "+55 73 9811-7194";

export const WA_NUMBER = "557398117194";
export const WA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Olá, Dr. Eduardo Bremer! Gostaria de falar sobre atendimento jurídico.",
)}`;
export const IG = "https://www.instagram.com/ehbremer.adv/";

export const IMG = {
  hero: "/images/eduardobremer/eduardo-bremer-hero-recriada.png",
  sobre: "/images/eduardobremer/instagram-feed/ehbremer-instagram-feed-05.jpg",
  portrait:
    "/images/eduardobremer/instagram-feed/ehbremer-instagram-feed-05.jpg",
  logoTransparent:
    "/images/eduardobremer/eduardo-bremer-logo-gold-transparent.png",
  logoHorizontal:
    "/images/eduardobremer/eduardo-bremer-logo-horizontal-gold.png",
  atuacoes: "/images/eduardobremer/eduardo-bremer-advogado-lateral-limpo.png",
  fgts: "/images/eduardobremer/instagram-feed-selected/eduardo-bremer-feed-deposito-fgts-07.jpg",
  reuniao:
    "/images/eduardobremer/instagram-feed-selected/eduardo-bremer-feed-reuniao-advocacia-21.jpg",
} as const;

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
  { href: "#faq", label: "Dúvidas" },
];

export type AreaItem = {
  id: string;
  Icon: LucideIcon;
  title: string;
  text: string;
};

export const areas: AreaItem[] = [
  {
    id: "advogado-criminalista",
    Icon: Shield,
    title: "Advogado Criminalista",
    text: "Defesa criminal em Mucuri, Teixeira de Freitas e Vitória: inquéritos policiais, audiências de custódia, tribunal do júri, execução penal e habeas corpus, com acompanhamento em todas as fases do processo.",
  },
  {
    id: "advogado-civel",
    Icon: FileText,
    title: "Advogado Cível",
    text: "Direito Civil e Direito das Famílias: divórcio, pensão alimentícia, guarda, inventário e sucessões, curatela, responsabilidade civil, contratos e direito possessório — atendimento presencial nos escritórios da Bahia e do Espírito Santo, e online.",
  },
  {
    id: "advogado-trabalhista",
    Icon: BriefcaseBusiness,
    title: "Advogado Trabalhista",
    text: "Defesa dos direitos dos trabalhadores em Mucuri, Teixeira de Freitas e Vitória: reconhecimento de vínculo empregatício, verbas rescisórias, horas extras, insalubridade e periculosidade, assédio moral, acidente de trabalho e reversão de justa causa. Especialista em Direito e Prática Trabalhista.",
  },
  {
    id: "advogado-previdenciario",
    Icon: Landmark,
    title: "Advogado Previdenciário",
    text: "Aposentadorias por idade, tempo de contribuição, especial e por incapacidade, BPC/LOAS, auxílio-doença, auxílio-acidente, pensão por morte, revisão de benefícios e análise de CNIS — atuação junto ao INSS e à Justiça Federal, com atendimento online em todo o Brasil.",
  },
];

export type ProcessStep = [number: string, title: string, text: string];

export const process: ProcessStep[] = [
  [
    "01",
    "Primeiro contato",
    "Você entra em contato pelo WhatsApp e relata sua situação com clareza e segurança.",
  ],
  [
    "02",
    "Análise inicial",
    "Os documentos, a urgência e a área jurídica envolvida são avaliados para definir o melhor caminho.",
  ],
  [
    "03",
    "Encaminhamento",
    "Com a estratégia definida, o atendimento segue com orientação técnica e acompanhamento responsável.",
  ],
];

export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "Quais verbas o trabalhador pode discutir após uma demissão?",
    a: "Depende da modalidade da demissão. Em regra, a legislação trabalhista prevê verbas como saldo de salário, aviso prévio, férias vencidas e proporcionais acrescidas de um terço, 13º proporcional e, na demissão sem justa causa, multa de 40% do FGTS e liberação do saque. Cada situação exige análise dos documentos e do contrato de trabalho para verificar o que é devido no caso concreto.",
  },
  {
    q: "O que caracteriza vínculo empregatício?",
    a: "A CLT considera empregado quem presta serviço de forma pessoal, habitual, onerosa e com subordinação ao empregador. Presentes esses requisitos, é possível discutir na Justiça do Trabalho o reconhecimento do vínculo e o registro em carteira, ainda que o contrato tenha sido informal ou celebrado sob outro formato.",
  },
  {
    q: "O que é o BPC/LOAS e quem pode solicitar?",
    a: "O Benefício de Prestação Continuada (BPC/LOAS) é um benefício assistencial de um salário mínimo pago a idosos a partir de 65 anos e a pessoas com deficiência de qualquer idade, desde que comprovada a baixa renda familiar nos critérios da lei. Não exige contribuição prévia ao INSS. A análise envolve a renda do grupo familiar, o CadÚnico e, para pessoas com deficiência, avaliação pericial.",
  },
  {
    q: "Quais são os principais tipos de aposentadoria do INSS?",
    a: "O Regime Geral de Previdência Social prevê, entre outras, a aposentadoria por idade, a aposentadoria por tempo de contribuição (com as regras de transição da Reforma da Previdência), a aposentadoria especial para quem trabalhou exposto a agentes nocivos e a aposentadoria por incapacidade permanente. A definição do caminho adequado depende da análise do CNIS e do histórico contributivo de cada pessoa.",
  },
  {
    q: "O que fazer ao ser intimado para prestar depoimento?",
    a: "A intimação deve ser atendida, mas a Constituição garante ao intimado o direito de ser acompanhado por advogado e, quando for o caso, o direito de permanecer em silêncio sobre fatos que possam incriminá-lo. O recomendável é buscar orientação jurídica antes da data marcada, para compreender a natureza do ato e preparar-se adequadamente.",
  },
  {
    q: "Como funciona o tribunal do júri?",
    a: "O tribunal do júri julga crimes dolosos contra a vida, como o homicídio. O procedimento tem duas fases: a instrução preliminar, encerrada com a decisão de pronúncia, e o julgamento em plenário, no qual sete jurados decidem sobre o caso. A defesa técnica por advogado é obrigatória em todas as fases.",
  },
  {
    q: "Qual a diferença entre divórcio consensual e litigioso?",
    a: "No divórcio consensual, o casal está de acordo com o fim do casamento e com questões como partilha de bens, guarda e pensão — quando não há filhos menores ou incapazes, pode até ser realizado em cartório. No litigioso, havendo desacordo, as questões são decididas pelo juiz. Em ambos os casos a atuação de advogado é obrigatória.",
  },
  {
    q: "Quando o inventário é necessário?",
    a: "O inventário é o procedimento para apurar e partilhar os bens deixados por uma pessoa falecida. É necessário sempre que houver patrimônio a transmitir, podendo ser feito em cartório (quando há consenso entre herdeiros capazes) ou judicialmente. A legislação prevê prazo para a abertura, e o atraso pode gerar multa sobre o imposto de transmissão.",
  },
  {
    q: "Como funciona o atendimento online?",
    a: "O primeiro contato é feito pelo WhatsApp, com o relato da situação e o envio dos documentos. A partir daí é agendada a orientação por videochamada ou telefone, com a mesma atenção do atendimento presencial. O atendimento online alcança clientes de todo o Brasil.",
  },
  {
    q: "Em quais cidades há atendimento presencial?",
    a: "O atendimento presencial é realizado nos escritórios de Mucuri/BA (Rua Severino Vieira, 83), Teixeira de Freitas/BA (Rua do Haiti, 260 — Bela Vista) e Vitória/ES (Av. Scherrer Souza, 2230 — Sala 401), mediante agendamento pelo WhatsApp.",
  },
];

export const footerTags = ["Criminal", "Cível", "Trabalhista", "Previdenciário"];

export const aboutTags = [
  "OAB/ES 37.747",
  "OAB/BA 83.916",
  "Professor Universitário",
  "Criminal",
  "Cível",
  "Trabalhista",
  "Previdenciário",
];

export const formation = [
  "Bacharel em Direito — IESFAVI - Instituto de Ensino Superior e Formação Avançada de Vitória (2014–2018)",
  "Especialista em Direito e Prática Trabalhista / Latu Sensu — Instituto IMADEC (2023)",
  "Pós-graduado em Direito do Trabalho — Faculdade Regional de Filosofia, Ciências e Letras de Candeias Bahia (2024)",
];

export type OfficeLocation = {
  city: string;
  address: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  geo?: { latitude: number; longitude: number };
  mapEmbedSrc: string;
  mapsUrl: string;
  iframeTitle: string;
  revealDelay: string;
};

export const offices: OfficeLocation[] = [
  {
    city: "Mucuri / BA",
    address: "Rua Severino Vieira, 83 · CEP 45.930-000",
    streetAddress: "Rua Severino Vieira, 83",
    addressLocality: "Mucuri",
    addressRegion: "BA",
    postalCode: "45930-000",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Rua%20Severino%20Vieira%2C%2083%2C%20Mucuri%2C%20BA%2C%2045930000%2C%20Brasil&output=embed&z=16&hl=pt-BR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Severino+Vieira,+83,+Mucuri,+BA,+45930-000",
    iframeTitle: "Mapa do escritório em Mucuri, Bahia",
    revealDelay: "0",
  },
  {
    city: "Vitória / ES",
    address: "Av. Scherrer Souza, 2230 · Ed. Essencial Escritórios · Sala 401",
    streetAddress:
      "Av. Scherrer Souza, 2230, Ed. Essencial Escritórios, Sala 401",
    addressLocality: "Vitória",
    addressRegion: "ES",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Avenida%20Scherrer%20Souza%2C%202230%2C%20Edificio%20Essencial%20Escritorios%2C%20Sala%20401%2C%20Vitoria%2C%20ES%2C%20Brasil&output=embed&z=16&hl=pt-BR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Scherrer+Souza,+2230,+Vitória,+ES",
    iframeTitle: "Mapa do escritório em Vitória, Espírito Santo",
    revealDelay: "120",
  },
  {
    city: "Teixeira de Freitas / BA",
    address: "Rua do Haiti, nº 260 · Bela Vista · CEP 45.990-301",
    streetAddress: "Rua do Haiti, 260, Bela Vista",
    addressLocality: "Teixeira de Freitas",
    addressRegion: "BA",
    postalCode: "45990-301",
    geo: { latitude: -17.5433819, longitude: -39.7376784 },
    mapEmbedSrc:
      "https://maps.google.com/maps?q=-17.5433819,-39.7376784&output=embed&z=16&hl=pt-BR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+do+Haiti,+260,+Bela+Vista,+Teixeira+de+Freitas,+BA,+45990-301",
    iframeTitle: "Mapa do escritório em Teixeira de Freitas, Bahia",
    revealDelay: "240",
  },
];
