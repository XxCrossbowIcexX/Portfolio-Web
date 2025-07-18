document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // Abrir/cerrar al hacer clic en el ícono
  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // evitar que se cierre por el document click
    menu.classList.toggle('active');
  });

  // Cerrar si haces clic en un enlace del menú
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('active');
    }
  });

  // Cerrar si haces clic fuera del menú y del botón
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove('active');
    }
  });
});
