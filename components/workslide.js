"use client";
import Image from "next/image";
import Link from "next/link";
import TitleThree from "./title-three";
import ButtonOutlineWhite from "./button-outline-white";
import ButtonBlack from "./button-black";

export default function WorkSlide({ practice }) {
  return (
    <div className="grid md:grid-cols-2 ">
      <Image
        src={practice.img}
        alt={practice.title}
        width={1280}
        height={1080}
        className=" "
      />

      <div className="bg-al-primary w-full h-full p-10">
        <div className="lg:w-5/6">
          <TitleThree className="mb-5">{practice.title}</TitleThree>
          <p className="mb-4 line-clamp-6 md:line-clamp-4 lg:line-clamp-6 text-justify">
            {practice.subtitle}
          </p>
          <Link href={practice.url}>
            <ButtonBlack>Read More</ButtonBlack>
            {/* <ButtonOutlineWhite>Read More</ButtonOutlineWhite> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
