document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
  
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
      menuToggle.classList.toggle('is-active');
    });
  });
  
  window.addEventListener('load', () => {
    const waveIcon = document.getElementById('wave-icon');
    // After 1s, fade in and wave
    setTimeout(() => {
      waveIcon.style.visibility = 'visible';
      waveIcon.style.opacity = '1';
      waveIcon.classList.add('animate-wave');
      // After 4s, fade out
      setTimeout(() => {
        waveIcon.style.opacity = '0';
        waveIcon.classList.remove('animate-wave');
        // Hide it completely after the fade-out finishes
        setTimeout(() => {
          waveIcon.style.visibility = 'hidden';
        }, 500);
      }, 3000);
    }, 1000);
  });
