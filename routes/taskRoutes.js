const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);

router.get('/:id', taskController.getTaskById);

router.post('/', taskController.createTask);

// put

router.put('/update/:id', taskController.updateTask);

router.delete('delete/:id', taskController.deleteTask);

//........

module.exports = router;