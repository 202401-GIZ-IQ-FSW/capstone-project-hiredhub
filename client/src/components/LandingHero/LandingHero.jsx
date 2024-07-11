"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import hero from "../../assets/Hero-section.svg";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";

function LandingHero() {
  const [searchTerm, setSearchterm] = useState();

  function handleChange(e) {
    setSearchterm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    redirect(`api/jobs/search?${searchTerm}`);
  };
  return (
    <div className="mb-14">
      <div className="grid xl:grid-cols-2 sm:grid-cols-1 mx-9 mt-9  justify-items-center ">
        <div className="flex flex-col justify-center xl:mx-12 sm:mx-4 gap-10 mb-10 xl:mb-4 sm:mb-7">
          <div className="flex flex-col gap-5">
            <h1 className="font-workSans text-3xl text-center text-greenprime xl:text-5xl sm:text-4xl font-semibold xl:text-left sm:text-center ">
              Let the jobs find you
            </h1>
            <h3 className="xl:text-xl sm:text-xl text-gray-700 text-center font-poppins  xl:w-full xl:text-left sm:text-center sm:w-[500px]">
              Create your free profile to get interview invites and jobs that
              work for you.
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center text-greenprime xl:text-4xl sm:text-3xl font-workSans font-semibold xl:text-left sm:text-center">
              Skip the paperwork
            </h2>
            <h4 className="xl:text-xl sm:text-xl text-gray-700 font-poppins md:text-left text-center font-lato">
              Your profile is your application. Apply to jobs instantly.
            </h4>
          </div>
        </div>
        <div className="w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px]">
          <Image
            src={hero}
            width={550}
            height={550}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="flex flex-col  w-screen place-items-center place-content-center mt-10">
        <h1 className="text-2xl mb-4 text-gray-600 font-poppins">
          Let's find your next job
        </h1>
        <div className="flex  items-center space-x-2 mb-8">
          <form>
            <Input
              onSubmit={handleSubmit}
              onChange={handleChange}
              value={searchTerm}
              className="xl:w-[550px] w-[350px]"
              type="text"
              placeholder="Search for jobs"
            />
          </form>
        </div>
        <Button
          className="bg-[#263238] hover:bg-[#3f4f56] w-[200px]"
          type="submit"
        >
          Advanced Search
        </Button>
      </div>
    </div>
  );
}

export default LandingHero;
