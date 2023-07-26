"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Menuitems from "@/data/menu.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();

  const { scrollYProgress } = useScroll(0);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#ffffff00", "#ffffff"]
  );

  return (
    <motion.div
      className="border-b-2 border-al-primary shadow-sm sticky w-full top-0 z-30"
      style={{ backgroundColor, marginTop: "-2px" }}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="w-[95%] sm:w-[85%] mx-auto">
              <div className="relative flex h-20 md:h-24 lg:h-32 items-center justify-between">
                <div className="absolute inset-y-0 right-2 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-50/20 hover:text-gray-800 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Icon
                        icon="heroicons:x-mark"
                        className="h-8 w-8 text-al-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <Icon
                        icon="heroicons:bars-3"
                        className="h-8 w-8 text-al-primary"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="w-full flex justify-between">
                  <div className="my-auto">
                    <Link href="/" className="flex">
                      <Image
                        src="/images/logos/al-logo.svg"
                        alt="Argya Legal Logo"
                        className="block lg:hidden"
                        width="50"
                        height="50"
                      /> 
                      <Image
                        src="/images/logos/al-logo.svg"
                        alt="Argya Legal Logo"
                        className="hidden lg:block "
                        width="75"
                        height="75"
                        title="Argya Legal"
                      />
                      <p className="text-al-primary font-bold text-lg pl-3 self-end">
                        Partnering for success
                      </p>
                    </Link>
                  </div>
                   <div className="hidden my-auto sm:mr-0 md:block">
                    <div className="flex space-x-4">
                      {Menuitems.menu.map((item) => {
                        return (
                          <Link
                            key={item.id}
                            href={item.URL}
                            className={` hover:bg-slate-100/10 text-al-primary px-3 py-2 text-lg transition duration-300 ease-in-out ${
                              pathname == `${item.URL}`
                                ? "font-normal"
                                : "font-bold"
                            }`}
                            aria-current="page"
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-150 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="md:hidden h-screen">
                <ul className="mt-5">
                  {Menuitems.menu.map((item) => {
                    return (
                      <li key={item.id} className="text-center py-6 px-3 border-b-2 md:border-b-0 border-al-primary hover:bg-al-secondary">
                        <Link
                          href={item.URL}
                          className={`text-al-primary px-3  text-lg transition duration-300 ease-in-out ${
                            pathname == `${item.URL}`
                              ? "font-normal"
                              : "font-bold"
                          }`}
                          onClick={() => open(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </motion.div>
  );
}
