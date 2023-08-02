"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react"; 
import { motion, useTransform, useScroll } from "framer-motion";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Why Us", href: "/whyus", current: false },
  { name: "Our Team", href: "/team", current: false },
  { name: "Practice Areas", href: "/practice-areas", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavTw() {
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
            <div className="mx-auto w-[98%] md:w-[95%] lg:w-[85%]">
              <div className="relative flex h-20 md:h-24 lg:h-32 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Icon
                        icon="heroicons:x-mark"
                        className="block h-8 w-8 text-al-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <Icon
                        icon="heroicons:bars-3"
                        className="block h-8 w-8 text-al-primary"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-stretch justify-between "> 
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex items-center justify-between py-1 md:block">
                      <Link href="/" className="flex">
                        <Image
                          src="/images/logos/al-logo.svg"
                          alt="Argya Legal Logo"
                          className="block lg:hidden"
                          width="50"
                          height="50"
                          title="Argya Legal"
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
                  </div>
                  <div className="hidden md:ml-6 md:block my-auto">
                    <div className="flex space-x-4 ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          title={item.name}
                          className={classNames(
                            pathname == `${item.href}`
                              ? "font-bold text-al-primary bg-al-secondary/10"
                              : "font-medium text-al-primary",
                            "rounded-md px-3 py-2 text-lg my-auto hover:bg-gray-100/10 hover:text-al-primary/60"
                          )}
                          aria-current={ pathname == `${item.href}` ? "page" : undefined }>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden bg-white h-screen">
              <div className="  text-center">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname == `${item.href}`
                        ? "bg-al-primary text-white"
                        : "text-al-primary hover:bg-al-secondary hover:text-white",
                      "block text-lg font-medium py-5 border-b-2 border-al-primary"
                    )}
                    aria-current={ pathname == `${item.href}` ? "page" : undefined }
                    onClick={!open}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.div>
  );
}
