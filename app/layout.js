import { Montserrat } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import PageTransition from "@/components/pagetransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Argya Legal | Home",
  description: "Λrgħyä Legal is a boutique law firm offering commercial transaction, contract management, regulatory compliance training and dispute resolution services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable}`}
    >
      <body>
        <NavBar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
