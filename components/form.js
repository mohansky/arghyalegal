"use client";
import { useForm, ValidationError } from "@formspree/react";
import Button from "./button";
import ButtonOutlineBlack from "./button-outline-black";

export default function Form() {
  const [state, handleSubmit] = useForm("mqkvaqzr");
  if (state.succeeded) {
    return <p className="text-2xl">Thank you for your message we wll get back to you as soon as possible.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-4xl mb-5">Contact Us</h5>
      <div className="mt-8 max-w-xl">
        <div className="grid grid-cols-1 gap-6">
          <label className="block"> 
            <input
              id="email"
              type="email"
              name="email"
              className="bg-transparent mt-0 block w-full px-2 py-4 border-0 border-b border-gray-800 focus:ring-0 focus:border-black"
              placeholder="Full Name"
            />
          </label>
          <label className="block"> 
            <input
              type="email"
              className="bg-transparent mt-0 block w-full px-2 py-4 border-0 border-b border-gray-800 focus:ring-0 focus:border-black"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>

          <label className="block"> 
            <textarea
              placeholder="Your message..."
              id="message"
              name="message"
              className="bg-transparent mt-0 block w-full px-2 py-4 resize-none border-0 border-b border-gray-800 focus:ring-0 focus:border-black"
              rows="5"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
        </div>
      </div>
      <ButtonOutlineBlack className="mt-5" type="submit" disabled={state.submitting}>
        Submit
      </ButtonOutlineBlack>
    </form>
  );
}
