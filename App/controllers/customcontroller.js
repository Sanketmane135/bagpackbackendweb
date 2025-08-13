let tripModel=require("../models/customtrip.model");

let addCustomTrip = async (req, res) => {
    try {
        const tripData = req.body;

        // Validate required fields
        if (!tripData.dest || !tripData.adultNo || !tripData.childNo || !tripData.startDateNo || !tripData.endDateNO || !tripData.accommodationNO || !tripData.usermail || !tripData.status) {
            return res.status(400).send({ status: 0, message: "All fields are required" });
        }
        // Create and save the new trip
        const newTrip = new tripModel(tripData);
        await newTrip.save();
        res.status(201).send({ status: 1, message: "Custom trip added successfully", trip: newTrip });

    } catch (err) {
        console.error("Error adding custom trip:", err);
        res.status(500).send({ status: 0, message: "Error adding custom trip" });
    }
}

let getCustomTrips = async (req, res) => {
    try {
        let trips = await tripModel.find();
        res.send({ status: 1, trips: trips });
    } catch (err) {
        console.log("Error fetching custom trips", err);
        res.status(500).send({ status: 0, message: "Error fetching custom trips" });
    }
}

let findCustomTripByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        // Validate input
        if (!email) {
            return res.status(400).json({ status: 0, message: "Email is required" });
        }

        // Find custom trips by user email
        const trips = await tripModel.find({ usermail: email }).lean();
        if (!trips || trips.length === 0) {
            return res.status(404).json({ status: 0, message: "No custom trips found for this email" });
        }

        // Send success response
        return res.status(200).json({
            status: 1,
            message: "Custom trips retrieved successfully",
            trips
        });

    } catch (err) {
        console.error("Error finding custom trips by email:", err);
        return res.status(500).json({ status: 0, message: "Server error while retrieving custom trips" });
    }
};

module.exports = { addCustomTrip ,getCustomTrips, findCustomTripByEmail};