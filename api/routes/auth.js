const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json({
      success: 'Posts saved successfully',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
// router.post("/login", async (req, res) => {
//     try{

//             // const status = 200;

//             // if (status === 200) {

//             //   const { password, ...others } = await Promise.resolve( user._doc);
//             //   return res.send( { password, ...others });

//             // } else if (status === 404) {
//             //   const user = await Promise.resolve(User.findOne({ username: req.body.username }));
//             //   return res.send(!user);
//             // }  else if (status === 404) {
//             //     const validated = await Promise.resolve(bcrypt.compare(req.body.password, user.password));
//             //     return res.send(!validated);
//             //   }

//             // return res.send('Server error');

//             const user = await user.findOne({ username: req.body.username });
//             !user && res.status(400).json("Wrong credentials!");

//             const validated = await bcrypt.compare(req.body.password, user.password);
//             !validated && res.status(400).json("Wrong credentials!");

//             const { password, ...others } = user._doc;
//             res.status(200).json(others);

//     }catch(err){
//         res.status(500).json(err);
//     }
// });

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json('User not found');
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json('Wrong credentials!');
    } else {
      const { password, ...others } = user._doc;
      return res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
