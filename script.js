// script.js

// Function to set the active link in the navigation bar
function setActiveLink() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Loop through the links
    navLinks.forEach(link => {
        // Check if the link's href matches the current page's URL
        if (link.href === window.location.href) {
            link.classList.add('active'); // Add active class to the current link
        }
    });
}

// Call the function on page load
window.onload = setActiveLink;
