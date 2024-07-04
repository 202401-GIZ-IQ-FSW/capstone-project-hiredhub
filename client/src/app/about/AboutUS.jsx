import React from "react";
const AboutUS = () => {
  return;
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
  </div>;
};
export default AboutUS;
