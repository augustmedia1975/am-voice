import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AM — Voice Over Artist & Audiobook Narrator",
  description: "Professional voice over artist and audiobook narrator. Cinematic narration. Character-rich performance. Studio quality.",
  openGraph: {
    title: "AM — Voice Over Artist & Audiobook Narrator",
    description: "Every Word. Every World.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${spaceMono.variable} antialiased font-body`}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
