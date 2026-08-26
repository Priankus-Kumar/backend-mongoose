const { default: mongoose } = require("mongoose");

let NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [20,"Minimum 20 character are required"],
  },    
});

const NotesModel = mongoose.model("Notes", NotesSchema);
module.exports = NotesModel;
