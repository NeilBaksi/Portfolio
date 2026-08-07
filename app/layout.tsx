import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "../src/index.css";
import "../src/App.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-oxanium",
});

const SITE_URL = "https://snbaksi.com";
const SITE_TITLE = "Neil Baksi — Product Engineer | MBA";
const SITE_DESCRIPTION =
  "Product engineer and MBA candidate. 7+ years building customer-facing digital products in telecom, fintech, and e-commerce.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords:
    "product engineer, product engineering, MBA, Kellogg, Melbourne Business School, Salesforce, Optus, Limepay, BNPL, fintech, e-commerce",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [`${SITE_URL}/Profile-Picture-v2.png`],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/Profile-Picture-v2.png`],
  },
};

export const viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Neil Baksi",
  url: SITE_URL,
  image: `${SITE_URL}/Profile-Picture-v2.png`,
  jobTitle: "Product Engineer",
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://github.com/NeilBaksi",
    "https://www.linkedin.com/in/neil-supratik-baksi/",
    "https://www.instagram.com/neilbaksi",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Melbourne Business School" },
    { "@type": "CollegeOrUniversity", name: "Kellogg School of Management" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Optus (Singtel)",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_TITLE,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={oxanium.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
