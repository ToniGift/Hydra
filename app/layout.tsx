import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hydra Merge — Client-to-Manufacturer Piping Solutions | Nigeria & Europe",
    template: "%s | Hydra Merge",
  },
  description:
    "Hydra Merge is Nigeria's authorised Client-to-Manufacturer agency for pre-insulated piping systems. Connecting contractors and developers directly with certified pipe manufacturers across Nigeria and Europe. ISO certified. Factory-direct pricing.",
  keywords: [
    "pre-insulated pipes",
    "PEX piping",
    "manufacturer partner",
    "district heating",
    "geothermal pipes",
    "Nigeria piping",
    "Africa manufacturer",
    "factory direct supply",
    "ISO certified pipes",
    "pipe agency Nigeria",
    "Europe piping systems",
  ],
  openGraph: {
    title: "Hydra Merge — Client-to-Manufacturer Piping Solutions",
    description:
      "Authorised Manufacturer Partner. Premium pre-insulated PEX pipes. Nigeria-based agency serving West Africa and Europe. Factory-direct pricing, 24h quote turnaround.",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
