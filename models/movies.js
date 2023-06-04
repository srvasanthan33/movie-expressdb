const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    movieName:{
        type:String,
        require : true
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
        minimum: 2017,
        maximum: 3017
    },
    rating:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('movieModel',movieSchema)