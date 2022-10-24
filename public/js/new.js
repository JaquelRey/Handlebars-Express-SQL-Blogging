const postHandler = async function(event) {
  //prevent reload on form submission
  event.preventDefault()
  const title = document.querySelector('input[name="post-title"]').value
  const content = document.querySelector('textarea[name="post-content"]').value

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  //reload dash on post 
  document.location.replace('/dashboard')
}

document.querySelector('#new-post-form').addEventListener('submit', postHandler)
