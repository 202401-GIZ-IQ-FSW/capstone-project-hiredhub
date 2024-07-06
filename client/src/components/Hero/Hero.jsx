import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import hero from "../../assets/Hero-section.svg";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="grid xl:grid-cols-2 sm:grid-cols-1 mx-9 mt-9  justify-items-center ">
        <div className="flex flex-col justify-center xl:mx-12 sm:mx-4 gap-10 mb-10 xl:mb-4 sm:mb-7">
          <div className="flex flex-col gap-5">
            <h1 className="font-mulish text-3xl text-center xl:text-5xl sm:text-4xl font-semibold xl:text-left sm:text-center ">
              Let the jobs Find you
            </h1>
            <h3 className="xl:text-2xl sm:text-xl text-center font-lato xl:w-full xl:text-left sm:text-center sm:w-[500px]">
              Create your free profile to get interview invites and jobs that
              work for you.
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center xl:text-4xl sm:text-3xl font-mulish font-semibold xl:text-left sm:text-center">
              Skip the paperwork
            </h2>
            <h4 className="xl:text-2xl sm:text-xl md:text-left text-center font-lato">
              Your profile is your application. Apply to jobs instantly.
            </h4>
          </div>
        </div>
        <div className="sm:p-10 xl:p-1 w-[300px] xl:w-[450px] md:w-[450px] sm:w-[400]">
          <Image
            src={hero}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="flex flex-col  w-screen place-items-center place-content-center mt-10">
        <h1 className="text-2xl mb-4 font-raleway">Let's find your next job</h1>
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
