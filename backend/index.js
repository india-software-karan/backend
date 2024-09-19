const express = require('express')
const cors = require('cors')
const user = require("./shopdata.json");
const app = express()
const port = process.env.PORT || 4000;

app.use(cors());

// const allowedOrigins = ['http://127.0.0.1:5502/', 'http://another-website.com'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/user',(req,res)=>{
  return res.json(user);
})

app.get('/api/user/:id',(req,res)=>{
  const id = req.params.id;
  const use = user.find((u) => u.id === id);
  return res.json(use);
})

app.get('/api/user/short',(req,res)=>{
  return res.json(user.short);
})

app.get('/api/github',(req,res)=>{
  res.json(gitData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})