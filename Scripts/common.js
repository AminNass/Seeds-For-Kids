// Sidebar logic
const menuToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar-menu');

const popup = document.getElementById("popup")

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

function showPopup(title, message) {

    const popupTitle = document.getElementById("popup-title");
    const popupMessage = document.getElementById("popup-text");

    popupTitle.textContent = title;
    popupMessage.textContent = message;

    popup.showModal()

}

function isEmailValid(email) {

    if (!email.includes("@")) {
        return false;
    }

    if (!email.includes(".")) {
        return false;
    }

    if (email.length < 6) {
        return false;
    }

    if (email.indexOf("@") === 0) {
        return false;
    }

    if (email.lastIndexOf(".") < 3) {
        return false;
    }

    if (email.lastIndexOf(".") < email.indexOf("@")) {
        return false;
    }

    if (email.length > 254) {
        return false;
    }   

    return true;

}
