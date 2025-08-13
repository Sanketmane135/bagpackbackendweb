let tripPackModel =require('../models/trippack.model');

let getTripPacks = async (req, res) => {
    try {
        let tripPacks = await tripPackModel.find();
        res.send({ status: 1, tripPacks: tripPacks });
    } catch (err) {
        console.log("Error fetching trip packs", err);
        res.status(500).send({ status: 0, message: "Error fetching trip packs" });
    }
}

let findTripPackageById=async(req,res)=>{
    try {
        const { id } = req.params;

        // 1. Validate input
        if (!id) {
            return res.status(400).json({ status: 0, message: "Package ID is required" });
        }

        // 2. Find trip package by ID
        const tripPack = await tripPackModel.findById(id);
        if (!tripPack) {
            return res.status(404).json({ status: 0, message: "Trip package not found" });
        }

        // 3. Send success
        return res.status(200).json({
            status: 1,
            message: "Trip package retrieved successfully",
            tripPack
        });

    } catch (err) {
        console.error("Error finding trip package by ID:", err);
        return res.status(500).json({ status: 0, message: "Server error while retrieving trip package" });
    }
}

module.exports = { getTripPacks ,findTripPackageById };

