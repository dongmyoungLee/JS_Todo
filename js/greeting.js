const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDEEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(e) {
    e.preventDefault()
    loginForm.classList.add(HIDEEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    greeting.innerText = `안녕하세요 ${username} 님`
    greeting.classList.remove(HIDEEN_CLASSNAME)
}

const saveUsername = localStorage.getItem(USERNAME_KEY)
console.log(saveUsername)

if (saveUsername === null) {
    loginForm.classList.remove(HIDEEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    greeting.innerText = `Hello ${saveUsername}`
    greeting.classList.remove(HIDEEN_CLASSNAME)
}