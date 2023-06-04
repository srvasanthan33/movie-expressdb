const express = require('express')
const router = express.Router()
const movieModel = require('../models/movies')


router.get('/',async (request,response) => {
    try{
        const data = await movieModel.find()
        response.json(data)
    }
    catch(error){
            response.status(500).json({
                message:error.message
            })
    }
})

router.get('/:id',(request,response) => {
    response.send(request.params.id)
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