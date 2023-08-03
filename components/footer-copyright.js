import FooterContactData from "@/data/footercontact.json"; 

export default function Copyright() {
  return (
    <>
      <div className="md:flex mx-5 md:mx-10 text-center justify-between text-xs font-thin pb-2">
        <div>
          <p>{FooterContactData.copyright}</p>
        </div>
        <div>
          <p>
            Designed and Developed by
            <a
              className="hover:text-al-primary"
              href="https://mohankumar.dev/"
              target="_blank"
            >
              {" "}
              Mohan
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
