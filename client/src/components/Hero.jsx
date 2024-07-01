import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import hero from "../assets/Hero-section.svg";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="p-5  flex flex-row gap-20 mx-auto ">
        <div className="flex flex-col justify-evenly gap-7">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl text-green font-radley">
              Let the jobs Find you
            </h1>
            <h3 className="font-raleway text-lg w-80 text-emerald-800">
              Create your free profile to get interview invites and jobs that
              work for you.
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-5xl text-green font-radley">
              Skip the paperwork
            </h2>
            <h4 className="text-lg font-raleway  text-emerald-800 w-80">
              Your profile is your application. Apply to jobs instantly.
            </h4>
          </div>
        </div>
        <div className="p-5">
          <Image
            src={hero}
            width={500}
            height={500}
            alt="Picture of the author"
          />{" "}
        </div>
      </div>

      <div className="flex flex-col  w-screen place-items-center place-content-center mt-10">
        <h1 className="text-2xl font-lato text-emerald-900">
          LET'S FIND YOUR NEXT JOB
        </h1>
        <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
          <Input type="email" placeholder="Search for jobs" />
          <Button type="submit">Search</Button>
        </div>
        <Button type="submit">ADVANCED SEARCH</Button>
      </div>
    </div>
  );
}

export default Hero;
