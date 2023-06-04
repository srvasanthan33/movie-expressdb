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
        require:true
    },
    rating:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('movieModel',movieSchema)