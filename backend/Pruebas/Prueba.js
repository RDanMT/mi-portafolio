fetch('https://portafolio-rdanmt.onrender.com/api/projects', { // <--- Cambiamos localhost por Render
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Inventario 2",
        description: "Uso de sintaxis moderna (const, let, =>) y manipulación avanzada del DOM para crear interfaces dinámicas. Incluye el procesamiento eficiente de datos con métodos de arreglos (filter, reduce), interactividad mediante eventos y persistencia local con localStorage. Todo esto se complementa con la integración de Chart.js para la visualización gráfica de la información.",
        image: "https://raw.githubusercontent.com/RDanMT/mi-portafolio/refs/heads/main/main/inventario-2.png",
        techStack: ["html", "css", "javascript"],
        liveLink: "https://rdanmt.github.io/Inventario-javascript/",
        githubLink: "https://github.com/RDanMT/Inventario-javascript.git"
    })
})
    .then(respuesta => respuesta.json())
    .then(datos => console.log("¡ÉXITO! Proyecto guardado en la base de datos:", datos))
    .catch(error => console.error("Hubo un error:", error));