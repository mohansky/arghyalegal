import Container from "@/components/container";
import PracticesAreasList from "@/components/practice-areas-list";
import Slider from "@/components/slider";
import TitleFour from "@/components/title-four";
import TitleTwo from "@/components/title-two";

export default function PracticeAreas() {
  return (
    <main>
      <Container className="pt-32 pb-16">
        {/* <TitleTwo>Practice Areas</TitleTwo> */}
        <h3 className="mb-5 lg:w-5/6 text-justify">
          Our team has worked on various complex issues in the E-Commerce,
          Information Technology, Consumer Goods, Automobile, Energy,
          Manufacturing, Engineering, Rail Transportation, Medical Device
          sectors.
          <br className="mb-5"/>
          Please feel free to contact us at
          <a
            className="font-semibold hover:text-gray-700"
            href="mailto:enquiry@arghyalegal.com"
            name="Email to enquiry@arghyalegal.com"
            title="Email to enquiry@arghyalegal.com"
            aria-label="Email to enquiry@arghyalegal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}enquiry@arghyalegal.com{" "}
          </a>
          for specific queries and detailed discussions. Although we focus on
          the below practice areas, we also assist our Clients to find the right
          resource at optimal costs without compromising on quality and outcome.
        </h3>
      </Container>

      <Slider />
      <Container className="py-32">
        <PracticesAreasList />
      </Container>
    </main>
  );
}
