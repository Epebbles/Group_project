const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vacasa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Whose ready to party!"))
    .catch((err) => console.log("How did I get here?", err));