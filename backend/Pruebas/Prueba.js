fetch('https://portafolio-rdanmt.onrender.com/api/projects', { // <--- Cambiamos localhost por Render
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Inventario 1",
        description: "Este proyecto tiene las bases de ✅ Semántica en HTML5 (main, aside, nav, section). ✅ Variables CSS para mantener colores y tipografías organizadas. ✅ CSS Grid para armar el diseño macro (esqueleto principal). ✅ CSS Flexbox para alinear el contenido interno (iconos, cabeceras, botones). ✅ CSS Interactivo (Checkbox Hack) para encender y apagar estilos sin escribir JavaScript. ✅ Diseño Responsivo (Media Queries) para adaptar una web normal a un celular.",
        image: "https://www.freepik.es/foto-gratis/caja-carton-lista-verificacion-carga-lapiz_34797023.htm#fromView=image_search_similar&page=1&position=0&uuid=4fe3ad26-73e1-48b0-bbaf-837e755c57d6&query=inventario+",
        techStack: ["html", "css"],
        liveLink: "https://rdanmt.github.io/Inventario-html/",
        githubLink: "https://github.com/RDanMT/Inventario-html.git"
    })
})
    .then(respuesta => respuesta.json())
    .then(datos => console.log("¡ÉXITO! Proyecto guardado en la base de datos:", datos))
    .catch(error => console.error("Hubo un error:", error));