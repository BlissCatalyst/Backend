
const express = require("express");
const configureMiddleware = require("./middleware.js");
const server = express();
const restricted = require('./restrict-routes.js')
configureMiddleware(server);
// ---------- ROUTING ---------- //
const registerRouter = require('../routes/register/register-router.js');
const playlistsRouter = require('../routes/playlists/playlists-router.js');
const users = require('../routes/user/users.js');
const songListRouter = require('../routes/song-list/song-list-router.js');

Test Route
server.get("/", (req, res) => {
res.status(200).json({ message: "This works!!!" });
});

server.use('/api/register', registerRouter);
server.use('/api/user/playlists', playlistsRouter);
server.use('/api/users', users);
server.use('/api/song-list', songListRouter);

module.exports = server;
