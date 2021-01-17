const path = require("path");

module.exports = {
   entry: ["@babel/polyfill", "whatwg-fetch", "./js/index.js"],
   output: {
      path: path.resolve(__dirname, "./build"),
      filename: "af--bundle.js",
   },
};
