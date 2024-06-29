import React from "react";

const ContanctUs = () => {
  return;
  // Navbar component//
  <div className="min-h-screen flex flex-col items-center justify-center px-4">
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <div className="mb-8 text-center">
        <h1 className="text-blue-700 font-bold text-5xl hover:opacity-80 hover:text-blue-300">
          Contact Us!
        </h1>
        <p className="text-black text-lg mt-4">
          Get in connection with us! as we are here to assist you in finding the
          perfect job opportunities and conquer your career.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="formComp w-full md:w-1/2">
          <form action="#" method="POST">
            <div className="mb-4">
              <label for="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label for="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label for="subject" className="block text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label for="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mapComp w-full md:w-1/2 flex justify-end">
          <img
            src="https://c8.alamy.com/comp/2RA7WX4/city-map-erbil-iraq-asia-vector-illustration-black-white-2RA7WX4.jpg"
            class="w-full md:w-[400px] md:h-[auto] sm:w-[200px] h-400  rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="min-h-auto my-16 hover:bg-blue-600 hover:text-white  flex items-center justify-center px-4 rounded-lg hover:shadow-2xl">
        <div className="w-full max-w-4xl p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center  ">
              <div>
                <h3 className="text-lg font-semibold hover:text-white">
                  Call Us
                </h3>
                <p className="text-sm  hover:text-white">+964 0000 000 00 00</p>
              </div>
            </div>
            <div className="flex items-center  ">
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-sm hover:text-white">info@hiredhub.com</p>
              </div>
            </div>
            <div className="flex items-center  ">
              <div>
                <h3 className="text-lg font-semibold">Visit Us</h3>
                <p className="text-sm hover:text-white">Erbil,KRI,Iraq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
  // footer component//
};
export default ContanctUs;
