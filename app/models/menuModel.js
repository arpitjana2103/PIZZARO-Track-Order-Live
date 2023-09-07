const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Pizza must have a name'],
        trim: true,
        minLegth: [5, 'A Pizza name must have more than or equal 5 chars'],
    },
    image: {
        type: String,
        required: [true, 'A Pizza must have an image'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'A Pizza must have a price<=150 && price>=400'],
        min: 150,
        max: 400,
    },
    veg: {
        type: Boolean,
        required: [true, 'A Pizza must have veg:[true/false]'],
    },
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = {Menu};
