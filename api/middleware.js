const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// const whitelist = ["https://moodibeats.herokuapp.com/", "https://fantabulous-music-finder.herokuapp.com/"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

module.exports = server => {
  server.use(cors(/*corsOptions*/));
  server.use(helmet());
  server.use(express.json());
};
