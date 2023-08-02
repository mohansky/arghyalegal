import Container from "@/components/container"; 
import WhyusList from "@/components/whyus-list";
import React from "react";

export default function WhyUs() {
  return (
    <main> 
      <Container className="py-16"> 
        <WhyusList/>
      </Container>
    </main>
  );
}
