"use client";
import { useRef, Fragment } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Menuitems from "@/data/menu.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

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
                        if (!item.children)
                          return (
                            <a
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
                            </a>
                          );
                        {
                          return (
                            <Menu
                              as="div"
                              key={item.id}
                              className="relative ml-3"
                            >
                              <Menu.Button className="text-gray-800 hover:text-gray-600 hover:bg-slate-100 rounded-md px-3 py-2 text-lg font-medium">
                                <a href={item.URL} aria-current="page">
                                  {item.name}
                                </a>
                              </Menu.Button>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute top-12 -right-14 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {item.children.map((item) => (
                                    <Menu.Item key={item.id}>
                                      <a
                                        href={item.URL}
                                        className="block text-center px-4 py-2 text-lg text-gray-800 hover:bg-slate-100 hover:text-gray-600"
                                      >
                                        {item.name}
                                      </a>
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          );
                        }
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
                <ul>
                  {Menuitems.menu.map((item) => {
                    if (!item.children)
                      return (
                        <li key={item.id} className="text-center mb-3">
                          <a
                            href={item.URL}
                            className={` hover:bg-slate-100/10 text-al-primary px-3 py-2 text-lg transition duration-300 ease-in-out ${
                              pathname == `${item.URL}`
                                ? "font-normal"
                                : "font-bold"
                            }`}
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    {
                      return (
                        <li key={item.id} className="text-center mb-3">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="my-auto mx-auto translate-x-2">
                                  <span className="flex text-gray-800 hover:text-gray-600 hover:bg-slate-100 rounded-md px-3 py-2 text-lg font-medium">
                                    {item.name}
                                    <Icon
                                      icon={`${
                                        open
                                          ? "fa6-solid:chevron-up"
                                          : "fa6-solid:chevron-down"
                                      }`}
                                      className="h-6 w-6 pl-2 text-slate-500"
                                    />
                                  </span>
                                </Disclosure.Button>
                                {item.children?.map((item) => (
                                  <Disclosure.Panel
                                    key={item.id}
                                    className="mt-2 py-2 "
                                  >
                                    <a
                                      href={item.URL}
                                      className="text-gray-800 hover:bg-nne-footer hover:text-gray-600 rounded-md px-3 py-2 text-lg font-medium"
                                    >
                                      {item.name}
                                    </a>
                                  </Disclosure.Panel>
                                ))}
                              </>
                            )}
                          </Disclosure>
                        </li>
                      );
                    }
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
