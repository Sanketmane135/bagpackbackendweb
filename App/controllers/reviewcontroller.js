let reviewModel = require('../models/review.model');

let getReviews = async (req, res) => {
    try {
        let reviews = await reviewModel.find();
        res.send({ status: 1, reviews: reviews });
    } catch (err) {
        console.log("Error fetching reviews", err);
        res.status(500).send({ status: 0, message: "Error fetching reviews" });
    }
}

let deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await reviewModel.findByIdAndDelete(id);
        if (!review) {
            return res.status(404).json({ status: 0, message: "Review not found" });
        }
        return res.status(200).json({ status: 1, message: "Review deleted successfully" });
    } catch (err) {
        console.error("Error deleting review:", err);   
        return res.status(500).json({ status: 0, message: "Server error while deleting review" });
    }
};

let addReviews = async (req, res) => {
    try {
        let { title, rating, user } = req.body;
        let newReview = new reviewModel({ title, rating,user });
        await newReview.save();
        res.send({ status: 1, message: "Review added successfully" });
    } catch (err) {
        console.log("Error adding review", err);
        res.status(500).send({ status: 0, message: "Error adding review" });
    }
}

module.exports = { getReviews, deleteReview ,addReviews};