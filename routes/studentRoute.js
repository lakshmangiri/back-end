// Define Express
const express = require('express')
// Call the student schema model
const studentModel = require('../models/studentModel');

const router = express.Router();

// Store the data in the DB
router.post("", (req, res, next) => {
    const post = new studentModel({
        studentId: req.body.studentId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        DOB: req.body.DOB,
        moduleOne: req.body.moduleOne,
        moduleTwo: req.body.moduleTwo,
        moduleThree: req.body.moduleThree,
        average: null,
        grade: null
    });
    post.save().then(newPost => {
        res.status(201).json({
            message: 'Student record added successfully',
            postId: newPost._id
        });
    });
});

// Get the data
router.get("", (req, res, next) => {
    // Find data in the collection from DB
    studentModel.find().then(documents => {
        res.status(200).json({
            message: 'Data fetched successfully!',
            posts: documents
        });
    }).catch(error => {
        res.status(500).json({ message: 'An error occurred', error: error });
    });
});

module.exports = router;