// Get all image containers
const imageContainers = document.querySelectorAll('.image-container');

// Add event listeners to each image container
imageContainers.forEach(container => {
    container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.1)'; // Zoom in on mouseover
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'scale(1)'; // Reset scale on mouseleave
    });
});
