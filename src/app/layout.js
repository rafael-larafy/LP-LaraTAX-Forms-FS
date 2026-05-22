import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Diagnóstico Tributário Gratuito | LFY",
  description:
    "Combinamos tecnologia exclusiva com inteligência estratégica para identificar oportunidades fiscais com segurança jurídica e zero risco.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TZSXBBN2');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZX4YHCJY1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZX4YHCJY1');
          `}
        </Script>
        <Script id="leads2b-config" strategy="beforeInteractive">
          {`window.l2bConfig = { token: 'N2EyMTQzOGQtODYzOC00ZWNiLTgzYzAtZDIwNDNhNzVmMTMy', workerUrl: 'https://js.app.leads2b.com' };`}
        </Script>
        <Script
          src="https://js.app.leads2b.com/latest"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZSXBBN2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
