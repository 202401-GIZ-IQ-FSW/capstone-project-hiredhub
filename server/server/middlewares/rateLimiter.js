
//this middleware can be used globally by importing it to the server.js

const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
  headers: true,
});

module.exports = rateLimiter;
