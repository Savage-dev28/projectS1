//navbar responsive
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

//Hero section
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hero-image");
    let currentIndex = 0;
  
    function showNextImage() {
      // Remove the 'active' class from the current image
      images[currentIndex].classList.remove("active");
  
      // Move to the next image (loop back to the first image if at the end)
      currentIndex = (currentIndex + 1) % images.length;
  
      // Add the 'active' class to the next image
      images[currentIndex].classList.add("active");
    }
  
    // Set the first image as active initially
    images[currentIndex].classList.add("active");
  
    // Change the image every 5 seconds (adjust timing as needed)
    setInterval(showNextImage, 5000);
  });

  //navbar out of view
  document.addEventListener("DOMContentLoaded", () => {
    let lastScrollTop = 0;
  
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("hidden");
      } else {
        // Scrolling up
        navbar.classList.remove("hidden");
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Reset scroll position at the top
    });
  });