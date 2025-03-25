const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/book-routes");

const app = express();

// Middlewares
app.use(express.json());


const corsOptions = {
  origin: 'https://bookstore-frontend-steel.vercel.app/', // Allow only this origin
   methods: ["POST", "GET","UPDATE","DELETE"],
  credentials: true, // Allow credentials to be sent
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
 }

 app.use(cors(corsOptions));
 app.use(cors(corsOptions));

// app.use(cors({
//   origin: 'https://bookstore-frontend-steel.vercel.app' // specify the frontend URL
// }));

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'https://bookstore-frontend-steel.vercel.app'); // or '*' to allow all origins
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
//   next();
// });

app.use("/books", router); // localhost:5000/books

// mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017/bookstore"
//   )
//   .then(() => console.log("Connected To Database"))
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch((err) => console.log(err));

app.get("/",(req,res)=>{
  res.send("welcome to the backend");
})

mongoose
  .connect(
    'mongodb+srv://codingblockindia:2i7wGs34RYHsdQ0P@contact.ewc0xy6.mongodb.net/?retryWrites=true&w=majority&appName=contact'
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
