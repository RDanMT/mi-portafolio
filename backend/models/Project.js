const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // Aquí guardaremos el link de una imagen de tu proyecto
    techStack: { type: [String], required: true }, // Un arreglo, ej: ['React', 'Node.js', 'CSS']
    liveLink: { type: String }, // Link a tu página en vivo (ej. GitHub Pages)
    githubLink: { type: String } // Link a tu repositorio de código
}, { timestamps: true }); // timestamps guarda la fecha en la que lo creaste

module.exports = mongoose.model('Project', projectSchema);