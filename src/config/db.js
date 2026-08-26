const { default: mongoose, model } = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://delhi2ka2prem_db_user:gkRRuahrUvXHrdLE@cluster0.vsdmzoz.mongodb.net/",
    );
    console.log("db connected");
  } catch (error) {
    console.log("the error is coming form db.js", error);
  }
};

module.exports = connectdb;


