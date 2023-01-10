const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//update
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json('You can update your account only...');
  }
});


//delete
// router.delete('/:id', async (req, res) => {
//   if (req.body.userId === req.params.id) {
//    try{
//       const user = await User.findById(req.params.id);
//     try {
//       await Post.deleteMany({ username: user.username});
//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).json("user has been deleted...");
//    } catch(err){
//       res.status(500).json(err);
//     } catch (err) {
//       return res.status(404).json("User Not Found!");
//     }
//   } else {
//     return res.status(401).json('You can delete your account only...');
//   }
// });

//delete
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

module.exports = router;
