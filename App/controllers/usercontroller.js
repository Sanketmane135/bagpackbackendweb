const usermodel = require('../models/usermodel.model');


let userlist=async(req,res)=>{
    try {
        let users = await usermodel.find();
        res.send({status: 1, userlists: users});
    } catch (err) {
        console.log("Error fetching enquiries", err);
        res.status(500).send({status: 0, message: "Error fetching enquiries"});
    }
}

let findUserByEmail = async (req, res) => {
    try {   
        const { email, password } = req.body;
        
        // 1. Validate input
        if (!email || !password) {
            return res.status(400).json({ status: 0, message: "Email and password are required" });
        }

        // 2. Find user
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: 0, message: "User not found" });
        }

        
        // 4. Send success
        return res.status(200).json({
            status: 1,
            message: "Login successful",
            user: { id: user._id, email: user.email, name: user.name }
        });

    } catch (err) {
        console.error("Error finding user by email:", err);
        return res.status(500).json({ status: 0, message: "Server error while logging in" });
    }
};

let addUser = async (req, res) => {
    try {   
        const { firstName, lastName, email, password, status } = req.body;

        // 1. Validate input
        if (!firstName || !lastName || !email || !password || !status) {
            return res.status(400).json({ status: 0, message: "All fields are required" });
        }

        // 2. Check if user already exists
        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: 0, message: "User already exists" });
        }
        
    

        // 4. Create new user
        const newUser = new usermodel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            status: status
        });

        // 5. Save user to database
        await newUser.save();

        return res.status(201).json({ 
            status: 1, 
            message: "User added successfully", 
            user: { id: newUser._id, email: newUser.email, name: `${newUser.firstName} ${newUser.lastName}` }
        });

    } catch (err) {
        console.error("Error adding user:", err);
        return res.status(500).json({ status: 0, message: "Server error while adding user" });
    }
}




module.exports={userlist , findUserByEmail,addUser};
