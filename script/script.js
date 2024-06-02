function toggleNavbar() {
    var navbar = document.getElementById("toggle-navbar");
    var icon = document.querySelector('.icon');
    
    if (navbar.style.maxHeight) {
        navbar.style.maxHeight = null; // Hide the navbar
    } else {
        navbar.style.maxHeight = navbar.scrollHeight + "px"; // Show the navbar
    }
    
    // Toggle active class for the icon
    icon.classList.toggle('active');
}