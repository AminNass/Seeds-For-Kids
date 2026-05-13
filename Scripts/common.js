// Sidebar logic
const menuToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar-menu');


function toggleSidebar() {
    sidebar.classList.toggle('active');
} 
menuToggle.addEventListener('click', toggleSidebar);

// Header logic
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Gets the scroll distance in.
    const scrollDistance = window.scrollY;

    // Checks if scroll distance is more than 100px
    if (scrollDistance > 1) {
        header.classList.add('scrolled');
        sidebar.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        sidebar.classList.remove('scrolled');
    }
});