"use client"
import { Ubuntu, Kreon } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const kreon = Kreon({
  subsets: ["latin"],
  variable: "--font-kreon",
  display: "swap",
});

// export const metadata = {
//   title: "Argya Legal",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en" className={`${ubuntu.variable} ${kreon.variable}`}>
      <body>
        <NavBar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.75,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 1,
                },
                exitState: {},
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
