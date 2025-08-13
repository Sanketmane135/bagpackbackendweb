let mongoose = require("mongoose");
let Schema = mongoose.Schema;


const usersSchema = new Schema(
  {
    
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password:{ type: String, required: true },
    status: { type: String,  required: true  },
  
  },
  { collection: 'logins' } 
);

let usermodel= mongoose.models.User || mongoose.model("User", usersSchema);
module.exports = usermodel;