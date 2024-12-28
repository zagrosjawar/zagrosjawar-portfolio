
document.addEventListener("DOMContentLoaded", function() {
  const logoLink = document.querySelector(".logo-container a");
  
  if (logoLink) {
    logoLink.addEventListener("click", function(event) {
      event.preventDefault(); // Stop immediate navigation

      // Add the fade-out class to trigger the transition
      document.body.classList.add("fade-out");

      // After the transition, navigate to the link
      setTimeout(() => {
        window.location.href = logoLink.href;
      }, 500); // Matches your CSS transition duration (0.5s)
    });
  }
});

