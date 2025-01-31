const fsPromises = require("fs").promises;
const fileNotPresent = require("./errorHandlers").fileNotPresent;
const requestUrlNotSupported = require("./errorHandlers").requestUrlNotSupported;

// eslint-disable-next-line no-undef
const pathToApp = __dirname + "/../app/";

module.exports = {
  requestListener: function (req, res) {
    switch (req.url) {
      case "/":
        fsPromises
          .readFile(pathToApp + "index.html")
          .then((contents) => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
          })
          .catch((e) => fileNotPresent(e, res));
        break;
      case "/css/styles.css":
        fsPromises
          .readFile(pathToApp + "css/styles.css")
          .then((contents) => {
            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(contents);
          })
          .catch((e) => fileNotPresent(e, res));
        break;
      case "/js/script.js":
        fsPromises
          .readFile(pathToApp + "js/script.js")
          .then((contents) => {
            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(contents);
          })
          .catch((e) => fileNotPresent(e, res));
        break;
      default:
        requestUrlNotSupported(res);
    }
  },
};
