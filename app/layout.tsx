import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sunny Ugwu",
  description: "Official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          id="google-gtag" // Added id here
          src="https://www.googletagmanager.com/gtag/js?id=G-JBZGV9J85W"
          strategy="afterInteractive" // Load after interactive
        />
        <Script
          id="google-gtag-init" // Added id here
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JBZGV9J85W');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PreloaderWrapper />
        {children}
      </body>
    </html>
  );
}
