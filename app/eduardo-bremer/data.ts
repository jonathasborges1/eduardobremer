import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  FileText,
  Landmark,
  Shield,
} from "lucide-react";

export const WA_NUMBER = "557398117194";
export const WA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Olá, Dr. Eduardo Bremer! Gostaria de falar sobre atendimento jurídico.",
)}`;
export const IG = "https://www.instagram.com/ehbremer.adv/";

export const IMG = {
  hero: "/images/eduardobremer/eduardo-bremer-advogado-08.jpg",
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
];

export type AreaItem = { Icon: LucideIcon; title: string; text: string };

export const areas: AreaItem[] = [
  {
    Icon: Shield,
    title: "Penal",
    text: "Tribunal do júri, execução penal e atuação estratégica em inquéritos e audiências.",
  },
  {
    Icon: FileText,
    title: "Direito Civil",
    text: "Direito das famílias, sucessões, curatela, responsabilidade civil, direito possessório e divórcio.",
  },
  {
    Icon: BriefcaseBusiness,
    title: "Trabalhista",
    text: "Atuação na defesa dos direitos dos trabalhadores, abrangendo reconhecimento de vínculo empregatício, verbas rescisórias, horas extras, indenizações, assédio moral, acidentes de trabalho, reversão de justa causa e demais demandas perante a Justiça do Trabalho.",
  },
  {
    Icon: Landmark,
    title: "Previdenciário",
    text: "Aposentadorias (idade, tempo de contribuição, especial e invalidez), revisão de benefícios, BPC/LOAS, auxílio-doença, auxílio-acidente, auxílio-reclusão, pensão por morte, análise de CNIS, regularização de vínculos, requerimentos no INSS e ações judiciais previdenciárias.",
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
  mapEmbedSrc: string;
  mapsUrl: string;
  iframeTitle: string;
  revealDelay: string;
};

export const offices: OfficeLocation[] = [
  {
    city: "Mucuri / BA",
    address: "Rua Severino Vieira, 83 · CEP 45.930-000",
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
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Avenida%20Scherrer%20Souza%2C%202230%2C%20Edificio%20Essencial%20Escritorios%2C%20Sala%20401%2C%20Vitoria%2C%20ES%2C%20Brasil&output=embed&z=16&hl=pt-BR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Scherrer+Souza,+2230,+Vitória,+ES",
    iframeTitle: "Mapa do escritório em Vitória, Espírito Santo",
    revealDelay: "120",
  },
];
