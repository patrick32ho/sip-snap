import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { minikitConfig } from "../minikit.config";
import { MiniAppReady } from "../components/MiniAppReady";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: minikitConfig.miniapp.name,
  description: minikitConfig.miniapp.description,
  openGraph: {
    title: minikitConfig.miniapp.ogTitle,
    description: minikitConfig.miniapp.ogDescription,
    images: [minikitConfig.miniapp.ogImageUrl],
  },
  other: {
    "base:app_id": "6980d9982aafa0bc9ad8a5d9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <MiniAppReady />
          {children}
        </Providers>
      </body>
    </html>
  );
}
