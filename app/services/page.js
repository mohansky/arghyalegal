import Container from "@/components/container";
import ServicesList from "@/components/services-list";

export default function Services() {
  return (
    <main>
      {/* <Container className="py-32">
        <p className="text-4xl w-2/3 md:w-1/2 font-light leading-relaxed">
          We are
          <span className="font-bold"> continuously advancing </span> our
          knowledge of new developments in the industries and areas we practice.
          We
          <span className="font-bold"> never stand still</span>; we
          <span className="font-bold"> never grow stale. </span> It shows in our
          work.
        </p>
      </Container> */}
      <Container className="py-32">
        <ServicesList />
      </Container>
    </main>
  );
}
