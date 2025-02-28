const admin = require("firebase-admin");
const serviceAccount = require("../key.json"); // Descarga este JSON desde Firebase > Configuración > Cuentas de servicio

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tasks-a6d19-default-rtdb.firebaseio.com/tasks" // Usa la URL de tu proyecto
});

const db = admin.firestore();

module.exports = db;