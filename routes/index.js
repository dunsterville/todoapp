module.exports = app => {

app.get('/items', (req,res) =>{
    Todo.findAll()
        .then(todo=> {
        res.json(todo)
    })
    .catch(e => console.log(e))
});


app.post('/items', (req, res) => {
    Todo.create(req.body)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(e => {console.log(e)})
})



app.put('/items/:id', (req, res) => {
    Todo.findOne({where: {id: parseInt(req.params.id)}})
    .then(todo => {
        todo.update(req.body)
            .then(() =>{
res.sendStatus(200)
            })
        })
})

app.delete('/items/:id', (req,res)=> {
    Todo.findOne({ where: {id: parseInt(req.params.id)}})
    .then(todo => todo.destroy())
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

};