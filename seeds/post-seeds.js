const { Post } = require("../models");

const postData = [
  {
   "title": "My head hurts..",
    "post_content":
      "I keep getting bonked on my head by goose3... What gives? I think I have a concussion :(",
    "user_id": 1,
  },
  {
   "title": "Does This Platform Promote Violence?",
    "post_content":
      "Seriously, does it? User goose3 is relentless in their attacks on both my and duck1's noggin. Enough is enough! Where is the block feature??",
    "user_id": 2,
  },
  {
    "title": "Cry All You Want!",
    "post_content":
      "In a world where ducks and geese can post on a forum, I am unstoppable. My bonking power is fueled by your distress!",
    "user_id": 3,
  },
  {
    "title": "Meow Meow Meow Me-",
    "post_content":
      "Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. Feed me. ",
   "user_id": 4,
  },
  {
   "title": "I Quit!",
    "post_content":
      "I can't take it anymore! Every time I bring the ball back, they toss it away again! This is madness!",
    "user_id": 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
