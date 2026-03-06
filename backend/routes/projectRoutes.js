const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Importamos el molde que acabamos de crear

// RUTA 1: Obtener todos los proyectos (Método GET)
// Esta es la ruta que tu página de React consultará para mostrar tu portafolio
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find(); // Busca todos los proyectos en MongoDB
        res.json(projects); // Los envía como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proyectos' });
    }
});

// RUTA 2: Crear un nuevo proyecto (Método POST)
// Usaremos esto para agregar tus proyectos a la base de datos
router.post('/', async (req, res) => {
    try {
        const newProject = new Project(req.body); // Toma los datos que enviemos
        const savedProject = await newProject.save(); // Los guarda en MongoDB
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el proyecto', error });
    }
});

module.exports = router;