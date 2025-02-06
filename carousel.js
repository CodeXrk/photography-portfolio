document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  const totalItems = items.length;

  // Function to show the current slide
  function showSlide(index) {
    // Remove 'active' class from all items
    items.forEach((item) => item.classList.remove('active'));
    // Add 'active' class to the current item
    items[index].classList.add('active');
  }

  // Event listeners for controls
  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  });

  // Optional: Auto-slide functionality (change slide every 5 seconds)
  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }, 5000);
});
