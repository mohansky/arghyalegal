import HeroPage from "@/components/hero-page";

export const metadata = {
  title: "Argya Legal | About",
  description: "Λrgħyä Legal is a boutique law firm offering commercial transaction, contract management, regulatory compliance training and dispute resolution services.",
};

export default function PageLayout({ children }) {
  return (
    <>
      <HeroPage image="/images/bg.jpg" title="About"/>
      <main>{children}</main>
    </>
  );
}
