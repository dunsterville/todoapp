document.getElementById('addTodo').addEventListener('click', e => {
  e.preventDefault()
  let todo = {
    name: document.getElementById('todo').value
  }
  // axios.post('/todos', todo)
  //   .then(res => {
      let todoItem = document.createElement('div')
      todoItem.className = 'todoItem'
      todoItem.innerHTML = `<div class="complete"></div><h5 class="todoName">${todo.name}</h5><button class="delete red darken-4
       waves-effect waves-light btn-small">Delete</button>`
      document.getElementById('items').append(todoItem)
    // })
    // .catch(err => console.log(err))
})


document.addEventListener('click', e => {
  if(e.target.className === 'complete') {
    this.classList.toggle('completed')
    this.nextSibling.classList.toggle('completedStrike')
  }
})