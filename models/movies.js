const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    movieName:{
        type:String,
        require : true
    },
    genre:{
        type:Array,
        require:true
    }
})