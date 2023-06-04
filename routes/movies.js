const express = require('express')
const router = express.Router()

router.get('/',(request,response) => {
    response.send('get request')
})

router.post('/',(request,response) => {
    response.send('post request')
})

router.patch('/:id',(request,response) => {
    response.send('patch by id request')
})

router.delete('/:id',(request,response) => {
    response.send("delete by id request")
})

module.exports = router