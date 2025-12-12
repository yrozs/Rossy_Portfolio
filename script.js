// ===================================
// 1. TYPING TEXT ANIMATION
// ===================================
// This function handles the dynamic typing effect for the main heading

const typingTextElement = document.querySelector('.typing-text span');
const words = ["Web Developer", "Software Developer", "Web Designer", "Photo Editor", "Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const delay = isDeleting ? 50 : 150; // Typing speed

    if (isDeleting) {
        // DELETE
        charIndex--;
    } else {
        // TYPE
        charIndex++;
    }

    

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Pause before deleting
        return;
    } 
    // If word is fully deleted
    else if (isDeleting && charIndex === -1) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        charIndex = 0;
        setTimeout(type, 500); // Pause before typing next word
        return;
    }

    setTimeout(type, delay);
}

// Start the typing animation once the page loads
document.addEventListener("DOMContentLoaded", () => {

});

// ===================================
// 2. ACTIVE NAVIGATION & SCROLL INDICATOR
// ===================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
    // A. Section Highlighting
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    
    // B. Sticky Header 
    header.classList.toggle('sticky', window.scrollY > 100);

    // C. Remove mobile menu when scrolling 
    // This prevents the menu from staying open if the user scrolls instead of clicking close
    nav.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
};

// ===================================
// 3. MOBILE MENU TOGGLE (Requires a menu icon in HTML)
// ===================================

const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

menuIcon.onclick = () => {
    // Toggle the 'active' class on the nav element
    nav.classList.toggle('active');
    // Also toggle the icon between bars and close (optional but recommended)
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');

};
