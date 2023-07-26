"use client";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";

export default function Accordian({ faq }) {
  return (
    <div className="mx-auto w-full rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between rounded-lg bg-al-secondary px-6 py-3 text-left 
                    font-medium text-gray-900 hover:bg-al-primary focus:outline-none focus-visible:ring 
                    focus-visible:ring-al-secondary focus-visible:ring-opacity-75"
            >
              <span>{faq.question}</span>
              <Icon
                icon="heroicons:chevron-up"
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-900`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
              {faq.answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
