import { useState, useEffect } from 'react';
import axios from 'axios';
import mernCover from './assets/Portafolio.png';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo: Estado de carga

  useEffect(() => {
    // Usamos la variable de entorno que ya configuramos en Vercel
    axios.get(import.meta.env.VITE_API_URL)
      .then(response => {
        // Verificamos que la respuesta sea un arreglo antes de guardarla
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los proyectos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="portfolio-container">
      {/* --- SECCIÓN DE PORTADA --- */}
      <div className="hero-cover">
        <img src={mernCover} alt="MERN Stack Cover" className="cover-image" />
        <div className="profile-section">
          <div className="profile-pic">
            <span>👨‍💻</span>
          </div>
          <div className="profile-info">
            <h1>Mi Portafolio</h1>
            <p>Desarrollador Web Full-Stack</p>
          </div>
        </div>
      </div>

      <div className="projects-header">
        <p>Proyectos cargados directamente desde MongoDB</p>
      </div>

      <div className="projects-grid">
        {/* PARACAÍDAS: Si está cargando o no hay proyectos, mostramos un mensaje */}
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
            <p className="loading-text">Conectando con el servidor en Render<span>.</span><span>.</span><span>.</span></p>
          </div>
        ) : projects.length > 0 ? (
          projects.map(project => (
            <div key={project._id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Tecnologías:</strong> {project.techStack.join(', ')}</p>
                <div className="links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="error-text">No se encontraron proyectos o el servidor no responde.</p>
        )}
      </div>
    </div>
  );
}

export default App;