const commentHandler = async function(event) {
  
  // prevent load on submission
  event.preventDefault()
  // select form field inputs to get user input
  const postId = document.querySelector('input[name="post-id"]').value
  const content = document.querySelector('textarea[name="comment-content"]').value

  // check if there's actual content in the comment,
  // if there is, post to db and then reload page to view comment
  if (content) {
    await fetch('/api/comment', {
      method: 'POST',
      content: JSON.stringify({
        postId,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    document.location.reload()
  }
}

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentHandler)
