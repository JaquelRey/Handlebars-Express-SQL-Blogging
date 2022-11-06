const { User } = require("../models");

const userData = [
  {
    "username": "duck1",
    "password": "password1"
  },
  {
    "username": "duck2",
    "password": "password2"
  },
  {
    "username": "goose3",
    "password": "password3"
  },
  {
    "username": "cat4",
    "password": "password4"
  },
  {
    "username": "dog5",
    "password": "password5"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
