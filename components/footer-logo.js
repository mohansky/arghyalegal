import Image from "next/image";
import React from "react";
import Links from "./links";

export default function FooterLogo() {
  return (
    <>
      <Links href="/" title="back to homepage" className="mb-5">
        <Image
          className="mx-auto mb-3"
          src="/images/logos/al-logo.svg"
          alt="A"
          width="200"
          height="200"
        />
        <p className="text-center text-al-primary text-xl font-bold"> Λrgħyä Legal </p>
      </Links>
    </>
  );
}
