const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// 1. Inicializar la aplicación de Express
const app = express();

// 2. Configurar Middlewares (Reglas de seguridad y formato)
app.use(cors()); // Permite que tu Frontend en React se comunique con este Backend
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

// 3. Traer las variables de tu archivo .env
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// 4. Crear una ruta de prueba básica
app.get('', (req, res) => {
    res.send('¡Hola! El servidor del portafolio está corriendo perfectamente 🚀');
});

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

// 5. Intentar conectar a MongoDB
if (MONGO_URI) {
    mongoose.connect(MONGO_URI)
        .then(() => console.log('🟢 Conectado exitosamente a MongoDB'))
        .catch((error) => console.error('🔴 Error al conectar a MongoDB:', error));
} else {
    console.log('🟡 Aviso: Falta configurar MONGO_URI en el archivo .env');
}

// 6. Encender el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});

// Exportar la app para que VS Code lo trate como módulo y evite el error de redeclaración de 'PORT'
module.exports = app;