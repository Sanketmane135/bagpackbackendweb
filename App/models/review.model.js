let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    //define schema
    title: { type: String, required: true },
    user: { type: String, required: true },
    rating: {type:Number, required:true},
  
  }
);
let reviewModel = mongoose.models.Review || mongoose.model("Review", reviewSchema);
module.exports = reviewModel;
