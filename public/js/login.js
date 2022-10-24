const loginHandler = async function(event) {
  //prevent reload for onclick submit
  event.preventDefault()
  const nameEl = document.querySelector('#name-input-login')
  const pwEl = document.querySelector('#pw-input-login')

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: nameEl.value,
      password: pwEl.value,
    }),
    headers: { 'Content-Type':'application/json' },
  })
  //if user is logged in successfully, 
  //redirect to their dash
  //else, alert user to bad login attempt
  if (response.ok) {
    document.location.replace('/dashboard')
  } else {
    alert('Login failed, try again.')
  }
}

document.querySelector('#login-form').addEventListener('submit', loginHandler)
