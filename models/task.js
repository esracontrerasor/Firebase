const db = require('../config/config');

class Task {
  // Obtener todas las tareas
  static async getAll() {
    try {
      const snapshot = await db.collection('tasks').get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      throw new Error("Error al obtener las tareas");
    }
  }

  // Obtener tarea por ID
  static async getById(id) {
    try {
      const doc = await db.collection('tasks').doc(id).get();
      return doc.exists ? { id: doc.id, ...doc.data() } : null;
    } catch (error) {
      throw new Error("Error al obtener la tarea");
    }
  }

  // Crear tarea
  static async create(taskData) {
    try {
      const docRef = await db.collection('tasks').add(taskData);
      return { id: docRef.id, ...taskData };
    } catch (error) {
      throw new Error("Error al crear la tarea");
    }
  }

  // Actualizar tarea
  static async update(id, newData) {
    try {
      await db.collection('tasks').doc(id).update(newData);
      return { id, ...newData };
    } catch (error) {
      throw new Error("Error al actualizar la tarea");
    }
  }

   // Eliminar tarea
   static async delete(id) {
    try {
      await db.collection('tasks').doc(id).delete();
      return { id };
    } catch (error) {
      throw new Error("Error al eliminar la tarea");
    }
  }
}

module.exports = Task;