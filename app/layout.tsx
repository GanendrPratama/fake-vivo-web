import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VIVO Indonesia - Mathematical Precision",
  description: "Official Vivo Indonesia website showcasing the latest smartphones with Bauhaus-inspired design",
  icons: {
    icon: "/Vivo_logo_2019.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Vivo_logo_2019.svg" />
      </head>
      <body className="bg-surface text-on-surface transition-colors">
        {children}
      </body>
    </html>
  );
}