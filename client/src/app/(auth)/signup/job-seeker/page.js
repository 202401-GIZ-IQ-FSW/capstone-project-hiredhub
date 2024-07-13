import SignUpForm from "@/components/SignUpForm/SignUpForm";
import React from "react";

const SignUp = async () => {
  return (
    <div className="my-6 py-4 mx-auto max-w-lg font-lato">
      <h1 className="text-4xl mb-8 font-extrabold text-[#263238] text-center">
        Sign up as a Job Seeker: Discover Jobs and Advance Your Career
      </h1>
      <SignUpForm role="jobSeeker" redirectURL="create-profile" />
    </div>
  );
};

export default SignUp;
