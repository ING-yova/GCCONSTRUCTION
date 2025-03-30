document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    once: false, // Para que se active cada vez que entres a la sección
    duration: 1000, // Duración de la animación
    easing: "ease-in-out", // Suavizado
    anchorPlacement: "top-bottom" // Se activa cuando la sección entra a la pantalla
});
});


function openModal(img) {
    document.getElementById('modalImage').src = img.src;
    $('#imageModal').modal('show');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });