let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    //define schema
    transId: { type: Number, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let transactionModel = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
module.exports = transactionModel;