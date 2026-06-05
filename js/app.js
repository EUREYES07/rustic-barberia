// Esperamos a que toda la página cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

  //  1. MENÚ HAMBURGUESA (para móvil)

const botonHamburguesa = document.getElementById('hamburger');

  // Creamos el menú móvil dinámicamente (copiando los links del nav)
const menuMovil = document.createElement('div');
  menuMovil.className = 'menu-movil';
  menuMovil.id = 'menu-movil';

  // Copiamos los mismos links de la navegación
  menuMovil.innerHTML = `
    <a href="#inicio">Inicio</a>
    <a href="#servicios">Servicios</a>
    <a href="#barberos">Barberos</a>
    <a href="#reservar">Reservar</a>
    <a href="#contacto">Contacto</a>
  `;

  // Insertamos el menú móvil después del header
  const header = document.getElementById('header');
  header.after(menuMovil);

  // Al hacer clic en el botón hamburguesa se despliega el menú
  botonHamburguesa.addEventListener('click', function () {
    menuMovil.classList.toggle('abierto');    
  });

  

  
  
});
