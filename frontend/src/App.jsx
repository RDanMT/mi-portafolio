import { useState, useEffect } from 'react';
import axios from 'axios';
import mernCover from './assets/MERN.png'; // Importamos tu imagen
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL) //import.meta.env.VITE_API_URL
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los proyectos:", error);
      });
  }, []);

  return (
    <div className="portfolio-container">

      {/* --- NUEVA SECCIÓN DE PORTADA --- */}
      <div className="hero-cover">
        <img src={mernCover} alt="MERN Stack Cover" className="cover-image" />

        <div className="profile-section">
          <div className="profile-pic">
            {/* Aquí luego puedes poner una etiqueta <img> con tu foto real */}
            <span>👨‍💻</span>
          </div>
          <div className="profile-info">
            <h1>Mi Portafolio</h1>
            <p>Desarrollador Web Full-Stack MERN</p>
          </div>
        </div>
      </div>
      {/* -------------------------------- */}

      <div className="projects-header">
        <p>Proyectos cargados directamente desde MongoDB</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
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
        ))}
      </div>
    </div>
  );
}

export default App;