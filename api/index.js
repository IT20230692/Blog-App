const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer =  require('multer');
const { json } = require('express');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")))  

const PORT = process.env.PORT_NUM;

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB Connected successfully`);
  })
  .catch((err) => console.log(`DB connection error`, err));

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, "images")
  },filename:(req,file,cb,)=>{
    cb(null,req.body.name)
  }
});

const upload = multer({ storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("File has been updated");
});


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen(PORT, () => {
  console.log(`Backend is running...  ${PORT}`);
});
 