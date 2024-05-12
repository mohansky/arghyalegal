import HeroPage from "@/components/hero-page";
import { BASE_PATH, SITE_TITLE, SITE_DESC, SITE_KEYWORDS } from "@/lib/constants";

export const metadata = {
  title: `Practice Areas | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  keywords: `${SITE_KEYWORDS}, Commercial Transactions, Regulatory Compliance & Training, Contracts Management, Dispute Resolution`,
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/practice-areas",
  },
};


export default function PageLayout({ children }) {
  return (
    <>
      <HeroPage image="/images/hero/practice-areas.jpg" title="Practice Areas"/>
      <main>{children}</main>
    </>
  );
}


