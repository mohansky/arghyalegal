import Hero from "@/components/hero";
import MyModal from "@/components/modal";
import Container from "@/components/container";
import Form from "@/components/form";
import QuicklinkList from "@/components/quicklink-list";
import Accordian from "@/components/accordian";
import FAQs from "@/data/faq.json";

export const metadata = {
  title: "Arghya Legal",
  description:
    "Λrgħyä Legal is a boutique law firm offering commercial transaction, contract management, regulatory compliance training and dispute resolution services.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <MyModal />
      <Container className="py-1">
        <p className="text-2xl lg:w-5/6 text-justify font-light leading-relaxed">
          <span className="text-al-primary"> Λrgħyä Legal </span>
          is a boutique law firm offering commercial transaction, contract
          management, Regulatory Compliance and Training and dispute resolution
          services.
          <br className="mb-5" />
          The firm was set up with an idea of empowering in-house counsels to
          utilise their time efficiently. We understand the limitations of
          in-house counsels when it comes to involvement in every matter. We
          intend to collaborate with inhouse teams on various work sharing
          models in order to assist and enable them to increase their
          productivity and efficiency allowing them ample time to focus more on
          critical big ticket items having a huge revenue impact for the
          company.
          <br className="mb-5" />
          <span className="font-bold">
            {" "}
            Integrity, Trust, Confidentiality, Teamwork{" "}
          </span>{" "}
          and
          <span className="font-bold"> Exclusivity </span> are the main
          cornerstones on which our firm stands.
          <br className="mb-5" />
          Our team has more than two decades of rich experience having practised
          in courts, worked with law firms and managing and leading legal
          departments of many multinational companies. We understand the
          industry, its nuances and expectations. Our experience helps us to
          quickly identify bottlenecks from an inhouse business perspective and
          provide practical and commercially viable legal solutions for complex
          issues which suit our client’s needs. We provide advice that matters.
        </p>
      </Container>
      <section className="bg-white">
        <Container className="py-20">
          <QuicklinkList />
        </Container>
      </section>

      <Container className="py-20 grid md:grid-cols-2">
      <div className="mb-20">
           <Form />
      </div>
     
        <div className="mb-20">
          <h5 className="text-4xl mb-5">FAQ</h5>
          {FAQs.map((faq) => {
            return <Accordian key={faq.id} faq={faq} />;
          })}
        </div>
      </Container>
    </main>
  );
}
