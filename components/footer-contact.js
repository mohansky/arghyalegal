import ContactItem from "./contact-item";
import FooterContactData from "../data/footercontact.json";

export default function FooterContact() {
  return (
    <>
      <ul className="mx-auto sm:mx-0 md:col-span-2">
        {FooterContactData.contact.map((item) => {
          return (
            <li key={item.id} className="mb-3">
              <ContactItem
                className="text-gray-900 hover:text-gray-600"
                name={item.name}
                title={item.title}
                href={item.href}
                arialabel={item.arialabel}
                text={item.text}
                icon={item.icon}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
