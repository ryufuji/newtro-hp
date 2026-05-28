import type { Metadata } from "next";
import { Noto_Sans_JP, Stick, Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StatusBar } from "@/components/StatusBar";
import { StickyHeader } from "@/components/StickyHeader";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const stick = Stick({
  variable: "--font-stick",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

const SITE_URL = "https://newtique.jp";
const SITE_NAME = "Newtique";
const DESCRIPTION =
  "Apparel by OMATSURI. 2026.07.01 LAUNCH.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — New × Antique Apparel Brand`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Launching 2026.07.01`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Launching 2026.07.01`,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${stick.variable} ${bebas.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="crt-global min-h-full flex flex-col bg-paper text-ink pb-8">
        <StickyHeader />
        {children}
        <StatusBar />
      </body>
    </html>
  );
}
