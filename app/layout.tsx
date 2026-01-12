import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getOrganizationSchema } from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "DECO GROUP — Upcycling, mobilier & mode responsable | Dakar",
  description:
    "DECO GROUP transforme déchets en pièces design : mobilier, mode et matières pour l'industrie. Ateliers, formations & solutions B2B.",
  keywords:
    "upcycling, recyclage, mobilier, mode, Sénégal, Dakar, économie circulaire, B2B",
  authors: [{ name: "DECO GROUP" }],
  openGraph: {
    title: "DECO GROUP — Upcycling, mobilier & mode responsable",
    description: "Donner une seconde vie. Créer un avenir.",
    type: "website",
    locale: "fr_SN",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECO GROUP — Upcycling, mobilier & mode responsable",
    description: "Donner une seconde vie. Créer un avenir.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
