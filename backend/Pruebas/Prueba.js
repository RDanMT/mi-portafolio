fetch('http://localhost:5000/api/projects', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Travel Recommendations",
        description: "Una aplicación web interactiva para descubrir, explorar y recomendar destinos turísticos increíbles alrededor del mundo.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://rdanmt.github.io/travel-recommendations/",
        githubLink: "https://github.com/RDanMT/travel-recommendations.git"
    })
})
    .then(respuesta => respuesta.json())
    .then(datos => console.log("¡ÉXITO! Tercer proyecto guardado:", datos))
    .catch(error => console.error("Hubo un error:", error));