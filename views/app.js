/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('../controllers/studentController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes

app.get('/students', studentController.getAllStudents);
app.post('/students', studentController.addStudent);
app.put('/students/:id', studentController.updateStudent);
app.patch('/students/:id', studentController.partialUpdateStudent);
app.delete('/students/:student_id', studentController.deleteStudent);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
