"use client";
import { useEffect, useRef, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ButtonOutline from "./button-outline";
import ButtonBlack from "./button-black";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(true);
  const modalButtonRef = useRef(null)

  useEffect(() => {
    const data = window.sessionStorage.getItem("DISCLAIMER");
    if (data !== null) setIsOpen(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("DISCLAIMER", JSON.stringify(isOpen));
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 items-center justify-center hidden">
        <button
          ref={modalButtonRef}
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal} initialFocus={modalButtonRef}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Disclaimer
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-500 text-justify">
                      The current rules of the Bar Council of India does not
                      permit advertisement or solicitation by advocates in any
                      form or manner.
                      <br className="mb-2" />
                      By agreeing to access this site, you confirm that you are
                      seeking information relating to Arghya Legal on your own
                      accord. The content of this website is for informational
                      purposes only and should not be interpreted as legal
                      advice or advertisement.
                      <br className="mb-2" />
                      Arghya Legal is the owner of all intellectual property
                      related to this website
                      <br className="mb-2" />
                      We disclaim liability of any nature arising from any
                      information or materials which form a part of this site.
                    </p>
                  </div>
                  <div className="mt-4">
                    {/* <ButtonOutline onClick={closeModal}>I Agree</ButtonOutline> */}
                    <ButtonBlack onClick={closeModal}>I Agree</ButtonBlack> 
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
