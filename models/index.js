const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
// import our models

// each post belongs to a user,
// through the fk of the user id
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
// each post has many comments,
// that belong to it through the fk of the post id
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});
// each comment belongs to a user,
// through the fk of the user id
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Comment,
  Post,
};
