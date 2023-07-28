const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    videoId:{
       require:true,
       type: Number 
    }
    username:{
        require:true,
        type: String
    },
    comment:{
        require:true,
        type: String
    },
    timestamp:{
        require:true,
        type: String
    }
})

module.exports = mongoose.model('Comment',commentSchema)
