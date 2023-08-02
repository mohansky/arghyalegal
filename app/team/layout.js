import HeroPage from "@/components/hero-page";
import { BASE_PATH, SITE_TITLE, SITE_DESC, SITE_KEYWORDS } from "@/lib/constants";

export const metadata = {
  title: `Our Team | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  keywords: `${SITE_KEYWORDS}, Ankur Deka Rabha, Anima Gogoi Deka`,
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/team",
  },
};

export default function PageLayout({ children }) {
  return (
    <>
      <HeroPage image="/images/joining-hands.jpg" title="Our Team"/>
      <main>{children}</main>
    </>
  );
}
