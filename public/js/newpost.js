// to make a new post,
const postHandler = async function (event) {
  //prevent reload on form submission
  event.preventDefault();
  // get data from the post form
  const title = document.querySelectorAll('input[name="post-title"]').value;
  const content = document.querySelectorAll('textarea[name="post-body"]').value;
  // send data as jason string as POST to post route
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });
  // reload the oage once promise is fulfilled
  document.location.replace("/dashboard");
};
// listener for click on form submission
document
  .getElementById("#post-form")
  .addEventListener("submit", postHandler);
