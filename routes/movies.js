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
 router.get('/:id',getMovie,async (request,response) => {
    response.status(200).json(response.movie)

})

router.patch('/:id',(request,response) => {
    response.send('patch by id request')

    // if (request.body.name != null){
    //     response.student.name = request.body.name
    // }
    // if (request.body.enrolledDepartment != null){
    //     response.student.enrolledDepartment = request.body.enrolledDepartment
    // }

    
    // try{
    //     const updateStudent = await response.student.save() // saving the details sent by user
    //     response.status(201).json(updateStudent)
    // }
    // catch (error){
    //     response.status(400).json({message:error.message})
    // }
})

router.delete('/:id',(request,response) => {
    response.send("delete by id request")

    // try{
    //     await response.student.deleteOne()
    //     response.json({message:`Deleted ${response.student.name} and the `})
    // }
    // catch(error){
    //     response.status(500).json({message:error.message})
    // }
})


async function getMovie(request,response,next) {
    let data
    try {
        data= await movieModel.findById(request.params.id)
        response.movie = data
        next()
    }
    catch(error)
    {
            response.status(500).json({message:error.message})
    }
}

module.exports = router