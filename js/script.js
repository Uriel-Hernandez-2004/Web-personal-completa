function mostrarSeccion(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Muestra la sección seleccionada
    const seccionActiva = document.getElementById(id);
    if (seccionActiva) {
        seccionActiva.style.display = 'block';
    }

    // Actualiza el menú activo
    const enlaces = document.querySelectorAll('nav ul li a');
    enlaces.forEach(enlace => {
        enlace.classList.remove('active');
        if (enlace.getAttribute('href') === `#${id}`) {
            enlace.classList.add('active');
        }
    });
}

// Mostrar por defecto la sección de inicio al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
    console.log("Página cargada y lista para mostrar los comentarios.");
});

new Swiper('.card_wrapper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

