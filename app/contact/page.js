import Container from "@/components/container";
import ContactItem from "@/components/contact-item";
import FooterContactData from "@/data/footercontact.json";
import Form from "@/components/form";

export default function Contact() {
  return (
    <div>
      <Container className="py-32">
        <p className="text-4xl w-5/6 md:w-1/2 font-light leading-relaxed">
          We look forward to connect with you
          <span className="font-bold"> in‑person,</span> by
          <span className="font-bold"> phone</span> or by
          <span className="font-bold"> email</span>.
        </p>
      </Container>
      <Container className="pb-32 grid lg:grid-cols-2 gap-8">
        <ul className=" ">
          <h5 className="text-4xl text-al-primary mb-5"> Λrgħyä Legal </h5>
          {FooterContactData.contact.map((item) => {
            return (
              <li key={item.id} className="mb-3">
                <ContactItem
                  className="text-black hover:text-gray-600"
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
        <Form/>
      </Container>
    </div>
  );
}
