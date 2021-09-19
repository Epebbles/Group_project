const mongoose = require('mongoose');
const RentalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of rental is required"],
    },
    photoUrl: {
        type: String,
        required: [true, "Image is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    price: {
        type: String,
        required: [true, "Price range is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
}, {timestamps: true});

module.exports = mongoose.model('Rental', RentalSchema);