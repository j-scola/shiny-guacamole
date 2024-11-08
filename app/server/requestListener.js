const fsPromises = require("fs").promises;
const fileNotPresent = require("./errorHandlers").fileNotPresent;
const requestUrlNotSupported = require("./errorHandlers").requestUrlNotSupported;

module.exports = {
  requestListener: function (req, res) {
    switch (req.url) {
      case "/":
        fsPromises
          .readFile(__dirname + "/../index.html")
          .then((contents) => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
          })
          .catch((e) => fileNotPresent(e, res));
        break;
      case "/styles.css":
        fsPromises
          .readFile(__dirname + "/../styles.css")
          .then((contents) => {
            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(contents);
          })
          .catch((e) => fileNotPresent(e, res));
        break;
      case "/script.js":
        fsPromises
          .readFile(__dirname + "/../script.js")
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
