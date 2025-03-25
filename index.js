const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
//app.use(cors());

app.use(cors(
    {
        origin: ["https://bookstore-frontend-steel.vercel.app/"],
        methods: ["POST", "GET","PUT","DELETE"],
        credentials: true
    }
));
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
