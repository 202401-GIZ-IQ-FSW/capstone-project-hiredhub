import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import hero from "../../assets/Hero-section.svg";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="grid xl:grid-cols-2 sm:grid-cols-1 mx-9 mt-9 justify-items-center ">
        <div className="flex flex-col justify-center mx-12 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-mulish font-semibold xl:text-left sm:text-center ">
              Let the jobs Find you
            </h1>
            <h3 className="text-2xl font-lato xl:w-full xl:text-left sm:text-center sm:w-[500px]">
              Create your free profile to get interview invites and jobs that
              work for you.
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-mulish font-semibold xl:text-left sm:text-center">
              Skip the paperwork
            </h2>
            <h4 className="text-xl font-lato">
              Your profile is your application. Apply to jobs instantly.
            </h4>
          </div>
        </div>
        <div className="sm:p-10 xl:p-1">
          <Image
            src={hero}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="flex flex-col  w-screen place-items-center place-content-center mt-10">
        <h1 className="text-2xl mb-4 font-raleway">
          Let's find your next job
        </h1>
        <div className="flex  items-center space-x-2 mb-4">
          <Input
            className="xl:w-[500px] sm:w-[300px]"
            type="email"
            placeholder="Search for jobs"
          />
          <Button type="submit">Search</Button>
        </div>
        <Button type="submit">Advanced Search</Button>
      </div>
    </div>
  );
}

export default Hero;
