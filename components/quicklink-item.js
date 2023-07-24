"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function QuicklinkItem({ quicklink }) {
  return (
    <>
      <li className="grid border-y-2 border-al-secondary bg-al-secondary hover:bg-al-primary">
        <Link href={quicklink.url} className=" py-20 ">
          <Icon icon={quicklink.icon} className="w-32 h-32 mx-auto text-white mb-5" />
          <h5 className="text-3xl mb-5 font-medium text-center"> {quicklink.title} </h5>
          {/* <p className="text-justify">{quicklink.text}</p> */}
        </Link>
      </li>
    </>
  );
}
