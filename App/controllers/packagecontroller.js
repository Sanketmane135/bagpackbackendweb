let packModel = require('../models/package.model');


let getpackages = async (req, res) => {
    try {
        let packages = await packModel.find();
        res.send({ status: 1, packages: packages });
    } catch (err) {
        console.log("Error fetching packages", err);
        res.status(500).send({ status: 0, message: "Error fetching packages" });
    }
}
let findPackagesByEmail = async (req, res) => {
    try {
       
        const { email } = req.params;

        // 1. Validate input
        if (!email) {
            return res.status(400).json({ status: 0, message: "Email is required" });
        }

        // 2. Find packages by emailId
        const packages = await packModel.find({ emailId: email }).lean();
        if (!packages || packages.length === 0) {
            return res.status(404).json({ status: 0, message: "No packages found for this email" });
        }

        // 3. Send success
        return res.status(200).json({
            status: 1,
            message: "Packages retrieved successfully",
            packages
        });

    } catch (err) {
        console.error("Error finding packages by email:", err);
        return res.status(500).json({ status: 0, message: "Server error while retrieving packages" });
    }   
};


let addPackage = async (req, res) => {
    try {
        const { 
            packName,
             adultsId,
              childId, 
              name, 
              phoneNO, 
              starDate, 
              acco, 
              emailId, 
              transId,
              totalAmount,
              packageImg,
              transStatus,
              status 
            } = req.body;

        // 1. Validate input
        if (!packName || !adultsId || !childId || !name || !phoneNO || !starDate || !acco || !emailId || !status || !totalAmount || !packageImg || !transId || !transStatus) {
            return res.status(400).json({ status: 0, message: "All fields are required" });
        }

        // 2. Create new package
        const newPackage = new packModel({
            packName,
            adultsId,
            childId,
            name,
            phoneNO,
            starDate,
            acco,
            emailId,
            transId,
            transStatus,
            totalAmount,
            packageImg,
            status
        });

        // 3. Save package to database
        await newPackage.save();

        // 4. Send success response
        return res.status(201).json({
            status: 1,
            message: "Package created successfully",
            package: newPackage
        });

    } catch (err) {
        console.error("Error adding package:", err);
        return res.status(500).json({ status: 0, message: "Server error while adding package" });
    }
}

const updatePackageStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        if (!id || !status) {
            return res.status(400).json({ status: 0, message: "Package ID and status are required" });
        }
        const updatedPackage = await packModel.findByIdAndUpdate(id,
            { status: status },
            { new: true }
        );2
        if (!updatedPackage) {
            return res.status(404).json({ status: 0, message: "Package not found" });
        }
        return res.status(200).json({
            status: 1,
            message: "Package status updated successfully",
            package: updatedPackage
        });
    } catch (err) {
        console.error("Error updating package status:", err);
        return res.status(500).json({ status: 0, message: "Server error while updating package status" });
    }
}

module.exports = {getpackages,findPackagesByEmail,addPackage,updatePackageStatus};