const postId = document.querySelector('input[name="post-id"]').value

const editHandler = async function (event) {

  // prevent load on submission
  event.preventDefault()
  // select form field inputs to get user input
  // check if there's actual content in the post,
  // if there is, post to db and then reload page to view comment

  const title = document.querySelector('input[name="post-title"]').value
  const content = document.querySelector('textarea[name="post-body"]').value

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  // after post is updated, redirect user to dashboard
  document.location.replace('/dashboard')
}

// user deletes post, 
// then is redirected to dashboard

const deleteHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  })
  document.location.replace('/dashboard')
}

// adding listeners for onclick events to call funcs
document.querySelector('#edit-form').addEventListener('submit', editHandler)
document.querySelector('#delete-btn').addEventListener('click', deleteHandler)
