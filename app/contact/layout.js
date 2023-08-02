import HeroPage from "@/components/hero-page";
import { BASE_PATH, SITE_TITLE, SITE_DESC, SITE_KEYWORDS } from "@/lib/constants";

export const metadata = {
  title: `Contact | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  keywords: `${SITE_KEYWORDS}, Bangalore`,
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/contact",
  },
};


export default function PageLayout({ children }) {
  return (
    <>
      <HeroPage image="/images/joining-hands.jpg" title="Contact"/>
      <main>{children}</main>
    </>
  );
}
