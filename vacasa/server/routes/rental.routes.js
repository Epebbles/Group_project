const RentalController = require('../controllers/rental.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/vacasa', RentalController.getAllRentals);
    app.post('/api/vacasa', RentalController.createRental);
    app.get('/api/vacasa/:id', RentalController.getOneRental);
    app.put('/api/vacasa/:id', RentalController.editRental);
    app.delete('/api/vacasa/:id', RentalController.deleteRental);
}