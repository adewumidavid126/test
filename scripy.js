  function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const burgerIcon = document.querySelector('.burger-container');

    sideMenu.classList.toggle('active'); // Toggle the side menu visibility
    burgerIcon.classList.toggle('active'); // You can also toggle an active state on the burger icon if needed
  }

