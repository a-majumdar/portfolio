document.getElementById('color-blind-toggle').addEventListener('change', function() {
    document.body.classList.toggle('color-blind-mode', this.checked);
});

function showSection(sectionId) {
    document.getElementById('landing').style.display = 'none';
    document.querySelector('nav').style.display = 'flex';
    document.querySelector('main').style.display = 'block';

    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

function returnToLanding() {
    document.getElementById('landing').style.display = 'block';
    document.querySelector('nav').style.display = 'none';
    document.querySelector('main').style.display = 'none';
}

// Example code to dynamically add images to the gallery
const gallery = document.getElementById('image-gallery');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image paths

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});
