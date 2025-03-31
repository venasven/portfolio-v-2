document.addEventListener('DOMContentLoaded', function() {
    const imageLinks = document.querySelectorAll('.image-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    imageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const fullsizeImage = link.getAttribute('data-fullsize'); // Get the full-size image path
            lightboxImg.src = fullsizeImage; // Set the full-size image in the lightbox
            lightbox.style.display = 'flex'; // Show the lightbox
        });
    });

    // Close the lightbox when clicking the close button
    document.querySelector('.close-btn').addEventListener('click', function() {
        lightbox.style.display = 'none'; // Hide the lightbox
    });
});
