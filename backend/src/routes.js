const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

//const User = mongoose.model('User');

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

module.exports = routes;