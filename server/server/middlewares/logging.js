const fs = require("fs");
const path = require("path");

function logging(logDirectory = path.join(__dirname, "../logs")) {
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  function getLogFilePath(level) {
    const date = new Date().toISOString().slice(0, 10);
    return path.join(logDirectory, `${level}-${date}.log`);
  }

  function formatLog(level, message, context) {
    const timestamp = new Date().toISOString(); // Full ISO timestamp including minutes and seconds
    return `${timestamp} [${level.toUpperCase()}] ${message} ${
      context ? JSON.stringify(context) : ""
    }`;
  }

  function writeLog(level, message, context) {
    const logMessage = formatLog(level, message, context);
    const logFilePath = getLogFilePath(level);
    fs.appendFile(logFilePath, logMessage + "\n", (err) => {
      if (err) {
        console.error("Failed to write log:", err);
      }
    });
  }

  function log(level, message, context) {
    writeLog(level, message, context);
    if (["error", "warn"].includes(level)) {
      console[level](message, context);
    } else {
      console.log(message, context);
    }
  }

  return function loggerMiddleware(req, res, next) {
    const start = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - start;
      const { method, originalUrl } = req;
      const { statusCode } = res;
      const userAgent = req.headers["user-agent"];
      const logLevel =
        statusCode >= 500 ? "error" : statusCode >= 400 ? "warn" : "info";

      log(logLevel, `${method} ${originalUrl} ${statusCode} ${duration}ms`, {
        method,
        url: originalUrl,
        statusCode,
        duration,
        headers: req.headers,
        body: req.body,
        userAgent: userAgent,
      });
    });

    next();
  };
}

module.exports = logging;
