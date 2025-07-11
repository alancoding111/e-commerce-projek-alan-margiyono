document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageContents = document.querySelectorAll('.page-content');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const aboutLinkOnHome = document.getElementById('about-link');
    const backButtons = document.querySelectorAll('.back-btn');

    // Function to show a specific page and hide others
    function showPage(pageId) {
        pageContents.forEach(page => {
            page.classList.add('hidden');
        });
        document.getElementById(pageId).classList.remove('hidden');

        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId.replace('-page', '')) {
                link.classList.add('active');
            }
        });

        // Hide mobile menu after selection
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }

    // Event listeners for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.dataset.page + '-page';
            showPage(pageId);
        });
    });

    // Event listener for "Selengkapnya" button on Home page to go to About Us
    if (aboutLinkOnHome) {
        aboutLinkOnHome.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('about-page');
        });
    }

    // Event listener for mobile menu button
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Event listeners for back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('home-page'); // Always go back to home for now
        });
    });

    // Initialize: Show home page on load
    showPage('home-page');
});