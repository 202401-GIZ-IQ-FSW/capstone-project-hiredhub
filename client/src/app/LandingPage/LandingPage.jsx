import React from "react";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import SearchBox from "@/components/SearchBox/SearchBox";
import PopularJobsCard from "@/components/PopularJobsCard/PopularJobsCard";

// the hero section needs to be imported as well for top fiv of the page //

const LandingPage = () => {
  return (
    <div className="landingPage bg-gray-100">
      <NavBar />
      <div className="heroSection">
        {/* Hero top section of the landing page goes here */}
      </div>

      {/* Search Section */}
      <div className="searchBox bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          {" "}
          <h2 className="text-3xl font-bold text-[#40A578] mb-6">
            LET'S FIND YOUR NEXT JOB
          </h2>{" "}
          <SearchBox />
          <button class="bg-gray-800 hover:bg-[#40A578] text-white px-4 py-2 rounded-lg">
            Advanced Search
          </button>
        </div>
      </div>
      {/* Popular Jobs Section */}
      <div className=" popularJobs bg-white py-16">
        <div className="cardsContainer mx-auto">
          <h2 className="text-3xl font-bold text-[#40A578]  text-center mb-12 hover:font-bold">
            Popular Jobs
          </h2>
          <PopularJobsCard />
        </div>
      </div>
      {/* Employer Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#40A578] mb-6">
            Are you an employer?
          </h2>
          <p className="text-gray-600">
            <a
              href="{employer register page}"
              target="_blank"
              className="px-4 py-1 rounded-lg hover:bg-green-600 mb-6 hover:text-white"
            >
              {" "}
              Register
            </a>{" "}
            <br className="py-2 " /> your company and post your job listings
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default LandingPage;
