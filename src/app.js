const express = require("express");
const connectdb = require("./config/db");
const NotesModel = require("./model/notes.model");
const app = express();

app.use(express.json());

connectdb();

// normal show th full page of the http://localhost:4000
app.get("/", (req, res) => {
  res.send("got it.");
});

// calling the post method
app.post("/create", async(req, res) => {
    
    let{title,description}=req.body;
    const newNotes=await NotesModel.create({
        title,
        description,
    })
    res.send({
        success:true,
        message:"Notes created successfully",
       data:newNotes
    })

// return res.json(stautus).json({message:"",data:frontend.mongoose.model})
    
// ...........Get the data from the body what s present in the body ok.....
//   let data = req.body;
//   console.log(data);
// res.send("data is fetch properly.");

});

module.exports = app;
