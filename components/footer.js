"use client"; 
import Container from "./container";
import FooterMenu from "./footer-menu";
import FooterContact from "./footer-contact";
import FooterLogo from "./footer-logo"; 

export default function Footer() {
  return (
    <footer className="bg-al-secondary border-t-8 border-al-primary mt-5">
      <Container className="text-white py-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <FooterLogo/> 
        <FooterContact />
        <FooterMenu /> 
        {/* <Developer /> */}
      </Container>
    </footer>
  );
}
