document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;
  
  const prevButton = carousel.querySelector('.carousel-control.prev');
  const nextButton = carousel.querySelector('.carousel-control.next');
  
  // Function to show the current slide
  function showSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
  }
  
  // Go to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }
  
  // Go to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  }
  
  // Auto-rotate every 5 seconds
  let autoRotate = setInterval(nextSlide, 5000);
  
  // Manual navigation event listeners
  nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoRotate();
  });
  
  prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoRotate();
  });

  // Optional: Auto-slide functionality (change slide every 5 seconds)
  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }, 5000);
});
