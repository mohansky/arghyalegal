import HeroPage from "@/components/hero-page";
import { BASE_PATH, SITE_TITLE, SITE_DESC, SITE_KEYWORDS } from "@/lib/constants";

export const metadata = {
  title: `Why Us | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  keywords: `${SITE_KEYWORDS}, Availability, Partnership, Practicality, Customisation, Responsiveness`,
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/whyus",
  },
};

export default function PageLayout({ children }) {
  return (
    <>
      <HeroPage image="/images/hero/why-us.jpg" title="Why Us"/>
      <main>{children}</main>
    </>
  );
}
