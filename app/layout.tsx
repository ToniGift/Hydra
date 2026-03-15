import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hydra — Pre-insulated Piping Solutions for Europe",
    template: "%s | Hydra",
  },
  description:
    "Hydra connects construction firms, contractors and developers with premium Synco PEX pre-insulated pipe systems. Authorised Synco Partner. Fast quotes, expert advice, delivery across Europe.",
  keywords: ["pre-insulated pipes", "PEX", "Synco", "district heating", "geothermal", "Poland", "Europe"],
  openGraph: {
    title: "Hydra — Pre-insulated Piping Solutions for Europe",
    description: "Authorised Synco Partner. Premium PEX pre-insulated pipes. Fast quotes, delivery across Europe.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
