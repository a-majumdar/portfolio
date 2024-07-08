document.getElementById('color-blind-toggle').addEventListener('change', function() {
    document.body.classList.toggle('color-blind-mode', this.checked);
});

// Example code to dynamically add images to the gallery
const gallery = document.getElementById('image-gallery');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image paths

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});
