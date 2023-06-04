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

// router.get('/:id',async (request,response) => {
    
// })

router.post('/',async (request,response) => {
    const newMovie = new movieModel({

        movieName : request.body.movieName,
        genre : request.body.genre,
        language : request.body.language,
        releasedYear : request.body.releasedYear

    })
    try{
        const movie = await newMovie.save()
        response.status(200).json(movie)
    }
    catch(error){
        response.status(500).json({message:error})
    }
})

router.patch('/:id',(request,response) => {
    response.send('patch by id request')
})

router.delete('/:id',(request,response) => {
    response.send("delete by id request")
})

module.exports = router