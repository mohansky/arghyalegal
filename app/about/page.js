import Container from "@/components/container";
import Team from "@/components/team";
import React from "react";

export default function About() {
  return (
    <main>
      {/* <Container className="py-32">
        <p className="text-4xl w-2/3 md:w-1/2 font-light leading-relaxed">
          At Argya Legal, we seek, attract, and celebrate legal professionals
          who are shaped by
          <span className="font-bold"> values, inspired</span> by our clients,
          and
          <span className="font-bold"> driven </span>to succeed.
        </p>
      </Container> */}
      <Container className="py-16">
        <Team />
      </Container>
    </main>
  );
}
