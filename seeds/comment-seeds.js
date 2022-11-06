const { Comment } = require("../models");

const commentData = [
  {
    "userId": 1,
    "postId": 3,
    "body": "I'd just like you to apologize...",
  },
  {
  "userId": 2,
  "postId": 3,
  "body": "You need to be deplatformed.",
  },
  {
  "userId": 3,
  "postId": 2,
  "body": "Cope!",
  },
  {
    "userId": 3,
    "postId": 1,
    "body": "BONK!",
  },
  {
    "userId": 4,
    "postId": 4,
    "body": "Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. ",
  },
  {
    "userId": 5,
    "postId": 4,
    "body":
      "There is literally food in your dish.",
  },
  {
    "userId": 5,
    "postId": 3,
    "body": "I'm going goose hunting...",
  },
  {
    "userId": 4,
    "postId": 5,
    "body": "Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. ",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
