let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    //define schema
  
    dest: { type: String, required: true },
    adultNo: { type: String, required: true },
    childNo: { type: String, required: true },
    startDateNo: { type: String, required: true },
    endDateNO: { type: String, required: true },
    accommodation: { type: String, required: true },
    usermail: { type: String, required: true },
    tripType: { type: String, required: true },
    budget: { type: String, required: true },
    status: {type:String, required:true},

   

  },{
    collection:'trips',
  }
);

let tripModel = mongoose.models.Trip || mongoose.model("Trip", tripSchema);
module.exports = tripModel;
