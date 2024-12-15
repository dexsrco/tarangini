// Get modal elements
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');
const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');
modalOverlay.appendChild(modalContent);

// Close button functionality
const closeButton = document.createElement('span');
closeButton.classList.add('close-btn');
closeButton.innerHTML = '&times;';
modalOverlay.appendChild(closeButton);
document.body.appendChild(modalOverlay);

// Open image in modal on click
const imageLinks = document.querySelectorAll('.image-link');
imageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const imgSrc = event.target.src;
        modalContent.src = imgSrc; // Set the image source in modal

        // Trigger modal animations (fade-in and scaling)
        modalOverlay.style.display = 'flex'; // Show the modal overlay
        setTimeout(() => {
            modalOverlay.style.opacity = '1'; // Smooth fade-in
            modalContent.style.transform = 'scale(1)'; // Smooth scale-up
        }, 50);
    });
});

// Close modal when clicking close button
closeButton.addEventListener('click', () => {
    modalOverlay.style.opacity = '0'; // Fade out the modal overlay
    modalContent.style.transform = 'scale(0.8)'; // Shrink the image before hiding
    setTimeout(() => {
        modalOverlay.style.display = 'none'; // Hide the modal after fade-out
    }, 300); // Wait for fade-out transition
});

// Close modal when clicking outside the image
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.opacity = '0'; // Fade out the modal overlay
        modalContent.style.transform = 'scale(0.8)'; // Shrink the image before hiding
        setTimeout(() => {
            modalOverlay.style.display = 'none'; // Hide the modal after fade-out
        }, 300); // Wait for fade-out transition
    }
});

// Smooth fade-in for gallery images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.speaker img');
    setTimeout(() => {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('visible');
            }, index * 100); // Delay each image's fade-in for smooth effect
        });
    }, 500); // Wait a little after page load before starting the fade-in
});
