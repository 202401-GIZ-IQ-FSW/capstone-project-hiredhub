import React from "react";
const AboutUS = () => {
  return;
  //navbard//
  <div className="container mx-auto p-6">
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#40A578]">
        About HiredHub!
      </h2>
      <p className="text-gray-700 leading-relaxed">
        A small team passionate about helping job seekers to find their desired
        and well deserved opportunity in the local and global job market, that
        is what HiredHub about.
      </p>
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white hover:bg-[#263238] hover:text-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 hover:text-white">
              What is the value we provide?
            </h2>
            <p className="text-gray-700 hover:text-[#40A578] leading-relaxed">
              The qualified and well skilled candidates being provided with the
              latest opportunities in the job market is the core value we
              provide at HiredHub.
            </p>
          </div>

          <div className="bg-white hover:bg-[#263238] rounded-lg shadow-md p-6 hover:text-white">
            <h2 className="text-xl font-semibold mb-4 hover:text-white">
              What is our Mission?
            </h2>
            <p className="text-gray-700 leading-relaxed hover:text-[#40A578]">
              The mission that we put into all of our efforts is about being the
              point of gathering for the ones who are looking for quality
              results from taleneded well qualified candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="my-8">
      <h2 className="text-2xl text-[#40A578] font-semibold mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src=""
            alt="Halwest "
            className="w-32 h-32 rounded-lg border-[#40A578] border-2 mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">Halwest</h3>
          <p className="text-gray-600 text-center">Job Title</p>
          <p className="text-gray-700 mt-2 text-center">
            "Job description briefly"
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src=""
            alt="Schinak"
            className="w-32 h-32 rounded-lg border-[#40A578] border-2  mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">
            Schinak Mohamed
          </h3>
          <p className="text-gray-600 text-center">Job Title</p>
          <p className="text-gray-700 mt-2 text-center">
            "Job description briefly"
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src=""
            alt="Mo Nazar"
            className="w-32 h-32 rounded-lg border-[#40A578] border-2  mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">
            Mohammad Nazar
          </h3>
          <p className="text-gray-600 text-center">Job Title</p>
          <p className="text-gray-700 mt-2 text-center">
            "Job description briefly"
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src=""
            alt="Hana"
            className="w-32 h-32 rounded-lg border-[#40A578] border-2  mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">Hana</h3>
          <p className="text-gray-600 text-center">Job Title</p>
          <p className="text-gray-700 mt-2 text-center">
            "Job description briefly"
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src=""
            alt="Dilan nophoto"
            className="w-32 h-32 rounded-lg border-[#40A578] border-2  mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">
            Dilan Ahmed
          </h3>
          <p className="text-gray-600 text-center">
            Business Developer/Consultant
          </p>
          <p className="text-gray-700 mt-2 text-center">
            Dilan improves the business aspects of our company and provides
            consultancy to the employers and the cnadidates to ensure securing
            their desired end results.
          </p>
        </div>
      </div>
    </div>
  </div>;
  <Footer />;
};
export default AboutUS;
