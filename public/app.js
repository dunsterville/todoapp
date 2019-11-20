document.getElementById('addTodo').addEventListener('click', e => {
  e.preventDefault()
  let todo = {
    name: document.getElementById('name').value
  }
  axios.post('/todos', todo)
    .then(res => {
      let todo = document.createElement('div')
      todo.innerHTML = `<div class="complete"></div><h5>${todo.name}</h5><button class="delete btn btn-outline-danger">Delete</button>`
      document.getElementById('todos').append(todo)
    })
    .catch(err => console.log(err))
})

document.addEventListener('click', e => {
  if(e.target.className === 'complete') {
    this.nextSibling.classList.toggle('completed')
  }
})