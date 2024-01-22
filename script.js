// JavaScript to handle redirection on logo hover and inactivity

const logo = document.getElementById('logo');
const homePage = document.getElementById('homePage');
const projectsPage = document.getElementById('projectsPage');

let redirectTimer;

logo.addEventListener('mouseenter', () => {
    redirectTimer = setTimeout(() => {
        redirectToHomePage();
    }, 10000); // 10 seconds
});

logo.addEventListener('mouseleave', () => {
    clearTimeout(redirectTimer);
});

function redirectToHomePage() {
    document.getElementById('landingPage').style.display = 'none';
    homePage.style.display = 'flex';
}

function redirectToProjectsPage() {
    homePage.style.display = 'none';
    projectsPage.style.display = 'block';
}