const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/book-routes");

const app = express();

// Middlewares
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: 'https://bookstore-frontend-steel.vercel.app', // Allow only this origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allow these methods
  credentials: true, // Allow credentials (cookies, authorization headers)
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));
// app.options('*', (req, res) => {
//   res.status(200).end(); // Send 200 OK status for OPTIONS requests
// });
// Book Routes
app.use("/books", router); // Route for handling books (CRUD)

// Basic route for testing the backend
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://codingblockindia:2i7wGs34RYHsdQ0P@contact.ewc0xy6.mongodb.net/?retryWrites=true&w=majority&appName=contact')
  .then(() => {
    console.log("Connected to Database");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
