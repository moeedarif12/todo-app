import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000;


let todos = [];

app.use(express.json());
app.use(cors())

app.post('/todo', (req, res) => {
  console.log(req.body) 
  
  todos.push(req.body.text);
  res.send({
    message: "your todo is saved",
    data: todos
  })
})


app.get('/todos', (req, res) => {
  
res.send({
  message: "here is you todo list",
  data: todos
})
})

// app.get('/coffee', (req, res) => {
//   console.log('someone is asking for coffee');
// res.send('here is your coffee')
// })

// app.get('/icecream', (req, res) => {
//   console.log('someone is asking for icecream');
// res.send('here is your icecream')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})