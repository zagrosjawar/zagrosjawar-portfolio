document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
  
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
      menuToggle.classList.toggle('is-active');
    });
  });
  