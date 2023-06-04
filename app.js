const express = require("express")
const app = express()
const PORT = 3421

app.use(express.json())
app.get('/',(request,response) =>{
    response.send("hello")
})

app.listen(PORT,console.log(`Server running at http://localhost:${PORT}`))