import Button from "../ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="flex flex-row min-h-screen w-full">
      <div className="container mx-auto flex flex-col items-center px-6 text-center">
        <h1 className="text-xl font-bold mb-3">Frontend Engineer</h1>
        <p className="text-sm mb-3">
          Hi Matteo here, a Frontend Engineer with 4 years of web development
          experience on web development, 2.5+ on Angular applications in B2B
          financial SaaS environments.
        </p>
        {/* <p className="text-md mb-3">
          Frontend Engineer (Angular) | TypeScript · RxJS · REST APIs · Cypress E2E | Product Engineering
          </p> */}
        {/* <div id="ctaBtn" className="flex flex-row gap-2">
          <Button
            className=""
            variant={"primary"}
            type={"button"}
            href={"#projects"}
          >
            View Projects
          </Button>
          <Button
            className=""
            variant={"outline"}
            type={"button"}
            href={"about"}
          >
            Get in touch
          </Button>
        </div> */}
      </div>
    </section>
  );
}
