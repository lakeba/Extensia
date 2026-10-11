export type PartnerId = "mist" | "assetora";

export type Partner = {
  id: PartnerId;
  name: string;
  url: string;
  logo: { src: string; width: number; height: number; bg: string };
  audience: string;
  summary: string;
  points: string[];
  fit: string;
  issuer?: string;
};

// Copy is factual and general. No returns, rates or recommendations: Extensia doesn't hold an AFSL.
export const partners: Partner[] = [
  {
    id: "mist",
    name: "Mist",
    url: "https://gomist.co",
    logo: { src: "/partners/mist.png", width: 342, height: 121, bg: "#FE3001" },
    audience: "For international students and migrants",
    summary:
      "Mist is a financial and lifestyle app developed in Australia for international students and migrants. Its Proof of Funds service helps students show the living-cost funds their student visa requires, before they travel.",
    points: [
      "A Proof of Funds statement to include with your student visa application",
      "Funds held in a regulated trust and released in monthly instalments after you arrive",
      "Help settling in, including homestays, a student ID card and mobile plans",
    ],
    fit: "Use Mist to show your funds for your visa. Once you're here, use Extensia for everyday money: pay tuition, receive money from family and keep track of your spending.",
    issuer:
      "Mist Proof of Funds is issued by Assetora Australia Limited (ABN 33 153 951 770, AFSL 444365) as Responsible Entity of the Assetora Investment Fund (ARSN 167 020 626). Read the Product Disclosure Statement and Target Market Determination on gomist.co before deciding.",
  },
  {
    id: "assetora",
    name: "Assetora",
    url: "https://assetora.com",
    logo: { src: "/partners/assetora.png", width: 684, height: 142, bg: "#102B22" },
    audience: "For SMSF trustees",
    summary:
      "Assetora is an Australian investment platform, licensed since 2014. Through the Assetora Investment Fund, investors, including self-managed super funds, can buy units in sub-funds that each hold a single asset, such as property or private credit.",
    points: [
      "A structure designed for SMSFs: your fund holds units, not the asset directly",
      "Reporting that feeds into common SMSF administration software",
      "Units can be bought and sold on the Assetora Marketplace",
    ],
    fit: "Extensia handles your fund's day-to-day money: contributions, rollovers, payments and trustee approvals. If your trustees decide to invest in alternative assets, Assetora is one option to look at.",
    issuer:
      "Assetora Australia Limited (ABN 33 153 951 770, AFSL 444365) is the Responsible Entity of the Assetora Investment Fund (ARSN 167 020 626). Read the Product Disclosure Statement and Target Market Determination on assetora.com and consider independent advice before investing. Investing involves risk, including loss of capital.",
  },
];

export const partner = (id: PartnerId) => partners.find((p) => p.id === id)!;

export const partnerDisclaimer =
  "Our partners are independent companies and are responsible for their own products and services. Extensia doesn't receive payment for referring you to them. Information about partner products is general only. It isn't a recommendation or financial advice and doesn't take into account your objectives, financial situation or needs.";

export const partnerTypes = [
  "University or education provider",
  "Migration or education agent",
  "Financial services",
  "SMSF accountant, administrator or adviser",
  "Other",
];
