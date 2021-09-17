"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
server.use(cors());

const bookModel = require("./modules/BookModel");

const PORT = process.env.PORT || 3010;
mongoose.connect("mongodb://localhost:27017/myDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function seedFun() {
  let bookArr = [
    {
      title: "zorba",
      description: "novel written by the Cretan author Nikos Kazantzakis ",
      status: "avaliable",
      email: "gharam.alessa@gmail.com",
    },

    {
      title: "Pride and Prejudice",
      description:
        "  Pride and Prejudice has remained one of the most popular novels in the English language",
      status: "avaliable",
      email: "gharam.alessa@gmail.com",
    },

    {
      title: "The Great Gatsby",
      description:
        " The Great Gatsby is one of the great classics of twentieth-century literature. ",
      status: "avaliable",
      email: "gharam.alessa@gmail.com",
    },

    {
      title: "Tender Is the Night",
      description:
        ", Tender Is the Night is the tragic romance of the young actress Rosemary Hoyt and the stylish American couple Dick and Nicole Diver ",
      status: "avaliable",
      email: "gharam.alessa@gmail.com",
    },
  ];

  bookModel.create(bookArr);
}

// seedFun()




server.get("/test", (request, response) => {
  response.send("test request received");
});

server.get("/books",booksHandle)

function booksHandle(req,res) {
  const {email} = req.query; // const email = req.query.email; const name = req.query.name;

  bookModel.find({email:email},(err,result)=>{
    if(err){
      res.status(404).send("There was an error")
    }else{
      res.send(result);
    }
  })

}

server.listen(PORT, () => console.log(`listening on ${PORT}`));
