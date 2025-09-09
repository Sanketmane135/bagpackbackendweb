let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    //define schema
  
    dest: { type: String, required: true },
    adultNo: { type: Number, required: true },
    childNo: { type: Number, required: true },
    rooms: { type: Number, required: true },
    startDateNo: { type: String, required: true },
    endDateNO: { type: String, required: true },
    accommodationNO: { type: String, required: true },
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
