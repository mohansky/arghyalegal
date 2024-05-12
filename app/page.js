import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Container from "@/components/container";
import QuicklinkList from "@/components/quicklink-list";
import MyModal from "@/components/modal";
import Form from "@/components/form";
import FAQs from "@/data/faq.json";

const Accordian = dynamic(() => import("@/components/accordian"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <MyModal />
      <Container className="py-32">
        <div className="lg:w-5/6 text-justify leading-loose">
          <p className="mb-5">
            Λrgħyä in Sanskrit means “sacred offering”. It is our driving force
            behind everything that we provide as services to our clients.
          </p>
          <p className="mb-5">
            Founded in August, 2023, Λrgħyä Legal is a boutique law firm based
            in Bangalore, India providing legal services to both domestic and
            international clients on various subjects across different industry
            sectors with regard to Indian Law.
          </p>
          <p className="mb-5">
            Λrgħyä Legal was set up keeping in mind the principles of (a)
            Availability; (b) Affordability; (c) Quality; and (d) Integrity. We
            strive to maintain the highest standards of quality and professional
            integrity and pride ourselves on giving attention to each client,
            taking the time to not only fully understand their business and
            specific needs but also their entire ecosystem in order to provide
            curated solutions.
          </p>
          <p className="mb-5">
            Our core team has more than two decades of rich mix of domestic and
            international experience in litigation, law firms and leading and
            managing legal departments of multinational companies in diverse
            industry sectors. With a combination of in-house experience and an
            entrepreneurial mindset our team has the ability to grasp and
            understand criticality of issues, its impact on business and provide
            practical and legally acceptable solutions for complex issues which
            suit the specific needs of our clients with time being the essence.
            We collaborate closely with clients to establish enduring,
            results-driven relationships that enhance productivity, reduce
            costs, mitigate risks, and provide them with a competitive edge in
            the market.
          </p>
        </div>
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

        {/* <div className="mb-20">
          <h5 className="text-4xl mb-5">FAQ</h5>
          {FAQs.map((faq) => {
            return <Accordian key={faq.id} faq={faq} />;
          })}
        </div> */}
      </Container>
    </main>
  );
}
