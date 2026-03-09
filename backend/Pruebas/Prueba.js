fetch('https://portafolio-rdanmt.onrender.com/api/projects', { // <--- Cambiamos localhost por Render
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Plataforma Escolar",
        description: "Sistema de gestión educativa para el control de alumnos, maestros y calificaciones desarrollado en React.",
        image: "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?q=80&w=2070",
        techStack: ["MongoDB", "Express", "React", "Node"],
        liveLink: "https://rdanmt.github.io/PlataformaEscolar/",
        githubLink: "https://github.com/RDanMT/PlataformaEscolar.git"
    })
})
    .then(respuesta => respuesta.json())
    .then(datos => console.log("¡ÉXITO! Proyecto guardado en la base de datos:", datos))
    .catch(error => console.error("Hubo un error:", error));