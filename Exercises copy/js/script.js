var scrollButton = document.getElementById('scrollButton');
var scrollImage = document.getElementById('scrollImage');

// Function to check scroll position and update button
function updateButton() {
    if (window.scrollY === 0) { // If user hasn't scrolled down
        scrollImage.classList.add('rotate-180'); // Rotate image
    } else { // If user has scrolled down
        scrollImage.classList.remove('rotate-180'); // Return image to original state
    }
}

// Update button when page is scrolled
window.addEventListener('scroll', updateButton);

// Scroll to top or bottom when button is clicked
scrollButton.addEventListener('click', function () {
    if (window.scrollY === 0) { // If user hasn't scrolled down
        window.scrollTo({
            top: document.body.scrollHeight, // Scroll to bottom of page
            behavior: 'smooth' // Smooth scrolling
        });
    } else { // If user has scrolled down
        window.scrollTo({
            top: 0, // Scroll to top of page
            behavior: 'smooth' // Smooth scrolling
        });
        
    }
});

// Update button on page load
updateButton();