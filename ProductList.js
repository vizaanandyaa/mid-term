const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    videoId:{
        require:true,
        type: Number
    }
    productId:{
        require:true,
        type: String
    },
    link:{
        require:true,
        type: Number
    },
    title:{
        require:true,
        type: String
    },
    price:{
        require:true,
        type: Number
    }
})

module.exports = mongoose.model('Product',productSchema)
