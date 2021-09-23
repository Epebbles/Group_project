const Rental = require('../models/rental.model');

const getAllRentals = (req, res) => {
    Rental.find({})
        .then((allRentals) => res.json(allRentals))
        .catch((err) => res.status(400).json({error: err}));
}

const createRental = (req, res) => {
    const { name, photoUrl, location, price, description } = req.body;
    Rental.create({
        name,
        photoUrl,
        location,
        price,
        description,
    })
        .then((newRental) => res.json(newRental))
        .catch((err) => {
            console.log(err.errors)
            res.status(400).json({error: err.errors});
        });
}

const getOneRental = (req, res) => {
    Rental.findOne({ _id: req.params.id})
        .then((rental) => res.json(rental))
        .catch((err) => res.status(400).json({error: err}));
}

const editRental = (req, res) => {
    const {body} = req;
    Rental.findByIdAndUpdate(
        { _id: req.params.rentalId }, body,
        { new: true, runValidators: true}
    )
        .then((editRental) => res.json(editRental))
        .catch((err) => res.status(400).json({error: err}));
}

const deleteRental = (req, res) => {
    Rental.deleteOne({ _id: req.params.id})
        .then((deleteConfirm) => res.json(deleteConfirm))
        .catch((err) => res.status(200).json({error: err}));
}

module.exports = {
    getAllRentals,
    createRental,
    getOneRental,
    editRental,
    deleteRental,
}