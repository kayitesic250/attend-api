const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');

// Route to get all students
exports.getAllStudents = (req, res) => {
    studentModel.getAllStudents((error, results) => {
        if (error) {
            res.status(500).send('Error retrieving students');
            return;
        }

        res.json(results);
    });
};

// Route to add a new student
exports.addStudent = (req, res) => {
    const { fullname, reg_no } = req.body;

    studentModel.addStudent( fullname, reg_no, (error, message) => {
        if (error) {
            res.status(500).send('Error adding student');
            return;
        }

        res.send(message);
    });
};

// Route to update a student
exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, reg_no } = req.body;

    studentModel.updateStudent(id, name, reg_no, (error, message) => {
        if (error) {
            res.status(500).send('Error updating student');
            return;
        }

        res.send(message);
    });
};

// Route to partially update a student
exports.partialUpdateStudent = (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;

    studentModel.partialUpdateStudent(id, updatedFields, (error, message) => {
        if (error) {
            res.status(500).send('Error partially updating student');
            return;
        }

        res.send(message);
    });
};

// Route to delete a student
exports.deleteStudent = (req, res) => {
    const { student_id } = req.params;

    studentModel.deleteStudent(student_id, (error, message) => {
        if (error) {
            res.status(500).send('Error deleting student');
            return;
        }

        res.send(message);
    });
};

