let tripPackModel=require('../models/trippack.model');

let addTripPack = async (req, res) => {
    try {
        const tripPackData = req.body;

        // Manual validation before hitting MongoDB
        if (
            !tripPackData.tripName ||
            !tripPackData.location ||
            typeof tripPackData.durationDays !== 'number' ||
            typeof tripPackData.pricePerPerson !== 'number' ||
            !tripPackData.description ||
            !Array.isArray(tripPackData.highlights) || tripPackData.highlights.length === 0 ||
            !Array.isArray(tripPackData.itinerary) || tripPackData.itinerary.length === 0
        ) {
            return res.status(400).json({ status: 0, message: "All required fields must be provided and valid" });
        }

        // Create new trip package
        const newTripPack = new tripPackModel(tripPackData);
        await newTripPack.save();

        return res.status(201).json({
            status: 1,
            message: "Trip package created successfully",
            tripPack: newTripPack
        });

    } catch (err) {
        console.error("Error creating trip package:", err);
        return res.status(500).json({ status: 0, message: "Server error while creating trip package" });
    }
};
module.exports = { addTripPack };