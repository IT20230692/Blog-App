const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


//create post
router.post('/', async (req, res) => {
    const newpost = new Post(req.body);
    try{
        const savePost = await newpost.save();
        res.status(200).json(savePost);
    }catch(err){
        res.status(500).json(err);
    }
});



//update post
router.put('/:id', async (req,res) =>{
    try{
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try{
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {
                        new : true
                    }
                );
                res.status(200).json(updatePost);
                 }catch (err){
                 res.status(500).json(err);
                 }
            }else {
                res.status(401).json("you can update only your posts !");
            }
        }catch (err){
            res.status(500).json(err);
        }
});
//delete post
router.delete('/:id', async (req,res) =>{
    try{
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try{
                 await post.delete();
                 res.status(200).json("Post has been Deleted!")
                 }catch (err){
                 res.status(500).json(err);
                 }
            }else {
                res.status(401).json("you can delete only your posts !");
            }
        }catch (err){
            res.status(500).json(err);
        }
});


//get post
router.get('/:id', async (req,res) =>{
  try{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  }catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
