const RentalController = require('../controllers/rental.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/vacasa', RentalController.getAllRentals);
    app.post('/api/vacasa', authenticate, RentalController.createRental);
    app.get('/api/vacasa/:vacasaId', RentalController.getOneRental);
    app.put('/api/vacasa/:vacasaId', authenticate, RentalController.editRental);
    app.delete('/api/vacasa/:vacasaId', authenticate, RentalController.deleteRental);
}