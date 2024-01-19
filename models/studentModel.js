// Define mongoose
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { type: Number, required: true }, // Added to match your data
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    DOB: { type: Date, required: true },
    moduleOne: {type: Number, required: true},
    moduleTwo: {type: Number, required: true},
    moduleThree: {type: Number, required: true},
    average: {type: String},
    grade: {type: String}
}, {collection: 'studentMarks'});

module.exports = mongoose.model('studentMarks', studentSchema);

