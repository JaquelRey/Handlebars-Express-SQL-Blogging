const signupHandler = async function(event) {
  // prevent reload on form submit
  event.preventDefault()
  const nameEl = document.querySelector('#name-input-signup')
  const pwEl = document.querySelector('#pw-input-signup')

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: nameEl.value,
      password: pwEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  // if signup successful, redirect user to their dash
  // else, alert to failure
  if (response.ok) {
    document.location.replace('/dashboard')
  } else {
    alert('Sign up failed, try again.')
  }
}
document.querySelector('#signup').addEventListener('submit', signupHandler)
