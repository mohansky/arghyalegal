"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function QuicklinkItem({ quicklink }) {
  return (
    <>
      <li className="grid group border-y-2 border-al-secondary bg-al-secondary hover:bg-al-primary rounded-lg hover:shadow-md transition duration-300 ease-out">
        <Link href={quicklink.url} className=" py-20 ">
          <Icon
            icon={quicklink.icon}
            className="w-32 h-32 mx-auto text-white mb-5 group-hover:scale-110"
          />
          <h5 className="text-3xl mb-5 font-medium text-gray-900 group-hover:text-gray-700 text-center">
            {quicklink.title}
          </h5>
        </Link>
      </li>
    </>
  );
}
