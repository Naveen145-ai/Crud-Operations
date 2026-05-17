const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    desc: { type: String, required: true },
    seats: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;