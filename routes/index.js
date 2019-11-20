module.exports = app => {

app.get('/todos', (req,res) =>{
    Todo.findAll()
        .then(todo=> {
        res.json(todo)
    })
    .catch(e => console.log(e))
});


app.post('/todos', (req, res) => {
    Todo.create(req.body)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(e => {console.log(e)})
})



app.put('/todos/:id', (req, res) => {
    Todo.findOne({where: {id: parseInt(req.params.id)}})
    .then(todo => {
        todo.update(req.body)
            .then(() =>{
res.sendStatus(200)
            })
        })
})

app.delete('/todos/:id', (req,res)=> {
    Todo.findOne({ where: {id: parseInt(req.params.id)}})
    .then(todo => todo.destroy())
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

};