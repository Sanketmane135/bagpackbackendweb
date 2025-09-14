let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const packSchema = new Schema(
  {
    //define schema
    packName: { type: String, required: true },
    adultsId: { type: String, required: true },
    childId: { type: String, required: true },
    name:{ type: String, required: true },
    phoneNO: { type: Number, required: true },
    starDate: { type: String, required: true },
    acco:{type: String, required: true},
    emailId:{type: String, required: true},
    transId:{type:String, required:true},
    transStatus:{type:String, required:true},
    totalAmount:{type:String, required:true},
    packageImg:{type:String,required:true},
    status:{type: String, required: true},
  }
);

let packModel = mongoose.models.Package || mongoose.model("Package", packSchema);
module.exports = packModel;
