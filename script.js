document.addEventListener('DOMContentLoaded', function() {
    const imageLinks = document.querySelectorAll('.image-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    imageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const fullsizeImage = link.getAttribute('data-fullsize'); 
            lightboxImg.src = fullsizeImage; 
            lightbox.style.display = 'flex'; 
        });
    });

   
    document.querySelector('.close-btn').addEventListener('click', function() {
        lightbox.style.display = 'none'; 
    });
});
