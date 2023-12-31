const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const app = express();
const Video = require('./VideoThumbnailList');
const Product = require('./ProductList');
const Comment = require('./CommentList')
app.use(
    bodyParser.urlencoded({
        extended:true,
    }),
);

app.get('/video/:videoId', async (req, res)=>{
    try{
        const videos = await Video.findById(req.params.id);
        res.json(videos)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

app.get('/:videoId/product', async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.json(product)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

app.get('/:videoId/comment', async (req, res)=>{
    try{
        const comment = await Comment.findById(req.params.id);
        res.json(comment)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

app.post('/postComment',(req,res)=>{
    const postComments = new Comment({
        username: req.body.username,
        comment: req.body.comment,
        videoId: req.body.videoId
    })

    try{
        const commentToSave = postComments.save();
        res.status(200).json(commentToSave)
    }

    catch(error){
        res.status(400).json({message:error.message})
    }
})







app.use(bodyParser.json());


app.listen(3000,()=>console.log('Listening on port 3000'))
