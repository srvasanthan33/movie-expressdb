require("dotenv").config()

const express = require("express")
const app = express()
const PORT = 3421
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)
const db= mongoose.connection
db.on('error',errorMessage => console.log(errorMessage))
db.once('open',() => console.log('connection established'))

app.use(express.json())
app.get('/',(request,response) =>{
    response.send("hello")
})

const movie = require('./routes/movies')
app.use('/api/v1/movies',movie)

app.listen(PORT,console.log(`Server running at http://localhost:${PORT}`))