import Script from "next/script";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import PageTransition from "@/components/pagetransition";
import Footer from "@/components/footer";
import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
} from "@/lib/constants";
import "./globals.css";

const GTM_ID = "GTM-MTWDMSLH";
const NavBar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: `Home | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${SITE_KEYWORDS}`,
  authors: [{ name: "Ankur Deka Rabha" }, { name: "Mohan Kumar", url: "/" }],
  colorScheme: "light",
  creator: "Mohan Kumar",
  publisher: "Ankur Deka Rabha",
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Home | ${SITE_TITLE}`,
    description: `${SITE_DESC}`,
    authors: ["Ankur", "Mohan"],
    images: "/images/logos/og-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        <NavBar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
