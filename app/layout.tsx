// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import PreloaderWrapper from "@/components/PreloaderWrapper";
// import Script from "next/script";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Sunny Ugwu",
//   description: "Official website",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Analytics */}
//         <Script
//           id="google-analytics"
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-JBZGV9J85W"
//         />
//         <Script
//           id="google-analytics-init"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-JBZGV9J85W');
//             `,
//           }}
//         />

//         {/* Hotjar Tracking Code */}
//         <Script
//           id="hotjar"
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(h,o,t,j,a,r){
//                 h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//                 h._hjSettings={hjid:5184105,hjsv:6};
//                 a=o.getElementsByTagName('head')[0];
//                 r=o.createElement('script');r.async=1;
//                 r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//                 a.appendChild(r);
//               })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
//             `,
//           }}
//         />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <PreloaderWrapper />
//         {children}
//       </body>
//     </html>
//   );
// }

//====
import { useEffect } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag("config", "G-JBZGV9J85W", {
        page_path: url, // Use the structured type for config
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    
    // Cleanup the event listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
