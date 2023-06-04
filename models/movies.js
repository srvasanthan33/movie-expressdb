const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    movieName:{
        type:String,
        require : true,
        unique:true

    },
    genre:{
        type:Array,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    releasedYear:{
        type:Number,
        require:true,
        minimum: 1800,
        maximum: 3017
    },
    rating:{
        type:Number,
        require:true,
        minimum: 1,
        maximum: 10
    }
})

module.exports = mongoose.model('movieModel',movieSchema)