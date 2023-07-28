const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoId:{
        require:true,
        type: Number
    },
    urlImage:{
        require:true,
        type: Number
    },
    thumbnail:{
        require:true,
        type: String
    }
})

module.exports = mongoose.model('Video',videoSchema)
