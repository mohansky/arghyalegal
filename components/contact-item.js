"use client"
import { Icon } from "@iconify/react";

export default function ContactItem({
  name,
  title,
  href,
  arialabel,
  text,
  id,
  className,
  icon
}) {
  return (
    <>
      <div key={id} className="mb-5 w-fit flex">
        <Icon icon={icon} className="text-gray-900 mt-1 w-5 h-5 mr-3"/>
        <a
          className={`${className}`}
          href={href}
          name={name}
          title={title}
          aria-label={arialabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </a>
      </div>
    </>
  );
}
