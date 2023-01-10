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
router.delete('/:id', async (req,res) =>{
  if(req.body.userId === req.params.id){
    try{
      const user = await User.findById(req.params.id);
      try{
        await Post.deleteMany({ username: user.username});
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully...");
      }catch (err){
        res.status(500).json(err);
      }
    } catch (err){
      res.status(404).json("user not found!");
    }
  }else{
   return res.status(401).json('You can delete your account only...');

  }
});
//delete post


//get post
router.get('/:id', async (req,res) =>{
  try{
    const user = await User.findById(req.params.id);
    const{ password,  ...others } = user._doc;
    res.status(200).json(others);
  }catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
