// get id of post to edit or delete
const postId = document.querySelector('input[name="post-id"]').value;
// to edit a post,
const editHandler = async function (event) {
  // prevent load on submission
  event.preventDefault();
  // select form field inputs,
  // to get user input as post data.
  // post title
  const title = document.querySelectorAll('input[name="post-title"]').value;
  // post body
  const content = document.querySelectorAll('textarea[name="post-body"]').value;
  // send as json string, with appropriate header,
  // to the corresponding post id for the edit to effect
  await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // after post is updated, redirect user to dashboard
  document.location.replace("/dashboard");
};
// to delete a post,
// the post id is posted as a delete
// once completed,
// then the user is redirected to their dashboard
const deleteHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};
// adding listeners for onclick events
// edit
document.querySelectorAll("#edit-form").addEventListener("submit", editHandler);
// delete
document.querySelectorAll("#delete-button").addEventListener("click", deleteHandler);
