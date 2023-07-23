import HeroPage from "@/components/hero-page";

export const metadata = {
  title: "Argya Legal | Contact",
  description: "Generated by create next app",
};

export default function PageLayout({ children }) {
  return (
    <>
      <HeroPage image="/images/bg3.jpg" title="Contact"/>
      <main>{children}</main>
    </>
  );
}
