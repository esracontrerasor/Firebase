const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.getById(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = await Task.create({ title: req.body.title });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.update(req.params.id, { title: req.body.title });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función para eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.delete(req.params.id);
    res.status(200).json({ message: 'Tarea eliminada', deletedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};