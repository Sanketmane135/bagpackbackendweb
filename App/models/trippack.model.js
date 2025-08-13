let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const itinerarySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const tripSchema = new Schema(
  {
    tripName: { type: String, required: true },
    location: { type: String, required: true },
    durationDays: { type: Number, required: true },
    pricePerPerson: { type: Number, required: true },
    description: { type: String, required: true },
    highlights: [{ type: String, required: true }],
    itinerary: [itinerarySchema],
    createdBy: { type: String },
    status: { type: String, default: 'active' },
  },
  {
    collection: 'trippacks',
  }
);

let tripPackModel = mongoose.models.TripPack || mongoose.model("TripPack", tripSchema);
module.exports = tripPackModel;
