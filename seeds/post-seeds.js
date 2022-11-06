const { Post } = require("../models");

const postData = [
  {
  "postId": 1,
  "title": "My head hurts..",
  "body": "I keep getting bonked on my head by goose3... What gives? I think I have a concussion :(",
  "userId": 1,
  },
  {
  "postId": 2,
  "title": "Does This Platform Promote Violence?",
  "body": "Seriously, does it? User goose3 is relentless in their attacks on both my and duck1's noggin. Enough is enough! Where is the block feature??",
  "userId": 2,
  },
  {
  "postId": 2,
  "title": "Cry All You Want!",
  "body": "In a world where ducks and geese can post on a forum, I am unstoppable. My bonking power is fueled by your distress!",
  "userId": 3,
  },
  {
  "postId": 4,
  "title": "Meow Meow Meow Me-",
  "body": "Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. ",
  "userId": 4,
  },
  {
  "postId": 5,
  "title": "I Quit!",
  "body": "I can't take it anymore! Every time I bring the ball back, they toss it away again! This is madness!",
  "userId": 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
