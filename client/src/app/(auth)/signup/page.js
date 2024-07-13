import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";


const SignUp = () => {
  return (
    <div className="my-8 py-8 container">
      <div className="mx-auto max-w-lg font-lato">
        <div className="mb-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-[#263238]">
            Choose your Account type
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-5">
            Are you a Job Seeker?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore Opportunities, Apply Securely, and Accelerate Your Career
            Growth
          </p>
          <Link href={"/signup/job-seeker"}>
            <Button className="bg-[#263238] hover:bg-[#3f4f56] text-lg py-6">
              Sign up as a Job Seeker
              <HiArrowRight className="ml-3" />
            </Button>
          </Link>
        </div>

        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-5">
            Are you an Employer?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Source Skilled Talent, Streamline Hiring Processes, and Build a
            Dynamic Team
          </p>
          <Link href={"/signup/employer"}>
            <Button className="bg-[#263238] hover:bg-[#3f4f56] text-lg py-6">
              Sign up as an Employer
              <HiArrowRight className="ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
