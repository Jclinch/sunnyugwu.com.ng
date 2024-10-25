"use client"; // Mark this component as a Client Component

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use this to get the current path
import localFont from "next/font/local";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import Script from "next/script";

// Import metadata from the separate file
import { metadata } from "./metadata";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Track page views when the pathname changes
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-JBZGV9J85W", {
        page_path: pathname, // Set the page path
      });
    }
  }, [pathname]); // Effect runs on pathname change

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JBZGV9J85W"
        />
        <Script
          id="google-analytics-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JBZGV9J85W');
            `,
          }}
        />

        {/* Hotjar Tracking Code */}
        <Script
          id="hotjar"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5184105,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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
