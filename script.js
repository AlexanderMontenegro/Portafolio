// Función para mostrar/ocultar el menú en dispositivos móviles
function mostrarOcultarMenu() {
    const nav = document.getElementById('nav');
    const menuButton = document.querySelector('.nav-responsive');
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
}

// Función para seleccionar la sección y cambiar el color de la navegación
function seleccionar() {
    const enlaces = document.querySelectorAll('#nav a');
    enlaces.forEach(enlace => {
        enlace.classList.remove('activo');
    });
    this.classList.add('activo');
}

// Agregar un evento de clic a los enlaces para cambiar su estado activo
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', seleccionar);
});

// Aseguramos que al cargar la página el menú responsive no esté abierto por defecto
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    nav.classList.remove('open');
    const menuButton = document.querySelector('.nav-responsive');
    menuButton.classList.remove('open');
});
