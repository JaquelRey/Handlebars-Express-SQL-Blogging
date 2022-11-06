const { Comment } = require("../models");

const commentData = [
  {
    "user_id": 1,
    "post_id": 3,
    "comment_text": "I'd just like you to apologize...",
  },
  {
    "user_id": 2,
    "post_id": 3,
    "comment_text": "You need to be deplatformed.",
  },
  {
    "user_id": 3,
    "post_id": 2,
    "comment_text": "Cope!",
  },
  {
    "user_id": 3,
    "post_id": 1,
    "comment_text": "BONK!",
  },
  {
    "user_id": 4,
    "post_id": 4,
    "comment_text": "Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. ",
  },
  {
    "user_id": 5,
    "post_id": 4,
    "comment_text":
      "There is literally food in your dish.",
  },
  {
    "user_id": 5,
    "post_id": 3,
    "comment_text": "I'm going goose hunting...",
  },
  {
    "user_id": 4,
    "post_id": 5,
    "comment_text": "Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. ",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
