const baseURL = process.env.BASE_URL;
const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "HirdHub API",
      version: "0.1.0",
      description:
        "This is a job application API for HirdHub, a platform that connects job seekers with employers.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Hana Abdulla",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: `${baseURL}api`,
      },
    ],
  },
  apis: ["./server/server/docs/*.js"],
};

module.exports = swaggerOptions;
