let database = require("../database");



let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    res.render("/reminder")
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
