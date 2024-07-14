import SignUpForm from "@/components/SignUpForm/SignUpForm";
import React from "react";
import { signUp } from "@/services/authService";

const SignUp = async () => {
  return (
    <div className="my-6 py-4 mx-auto max-w-lg font-lato">
      <h1 className="text-4xl mb-8 font-extrabold text-[#263238] text-center">
        Sign up as an Employer: Post Jobs and Find Top Talent
      </h1>
      <SignUpForm role="employer" redirectURL="create-company" />
    </div>
  );
};

export default SignUp;
