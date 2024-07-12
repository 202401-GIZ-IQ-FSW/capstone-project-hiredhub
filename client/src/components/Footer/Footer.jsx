import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/HiredhubLogo.svg";

const Footer = () => {
  return (
    <div className="bg-[#F5F7F8] border-t-2  px-4 pt-16 mx-auto   md:px-24 lg:px-8">
      <div className="flex flex-col gap-5 mb-5 xl:flex-row justify-around">
        <div className="sm:col-span-2">
          <Link href={"/"}>
            <Image
              className="w-[160px]  md:w-[200px]"
              src={logo}
              width={100}
              height={100}
            />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              HiredHub is the place to find amazing job opportunites and
              talenets.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Finding work has never been easier.
            </p>
          </div>
        </div>
        <div>
          <Link className="font-poppins text-xl text-gray-600 " href={"/"}>
            Contact us
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 HiredHub inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
