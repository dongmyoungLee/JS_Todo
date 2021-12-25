const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(e) {
    const li = e.target.parentElement
    li.remove()

}

function paintToDo(newTodo) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = newTodo.text
    const button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener('click', deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(e) {
    e.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ''
    const newTodoObj = {
        text : newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos)

if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos)
    toDos = parseToDos
    parseToDos.forEach(paintToDo)
}