const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with HTML, CSS, and JavaScript.",
        image: "pro1.jpg",
        github: "https://github.com/yourprofile/portfolio",
        live: "https://yourportfolio.com"
    },
    {
        title: "E-Commerce App",
        description: "A full-stack e-commerce platform with Django and React.",
        image: "pro2.jpg",
        github: "https://github.com/yourprofile/ecommerce",
        live: "https://ecommerce.com"
    },
    {
        title: "Tournament App",
        description: "A gaming tournament platform with real-time leaderboards.",
        image: "pro3.png",
        github: "https://github.com/yourprofile/tournament",
        live: "https://tournament.com"
    }
];

let currentIndex = 0;

// DOM Elements
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-img");
const githubLink = document.getElementById("github-link");
const liveLink = document.getElementById("live-link");

const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

// Update UI Function
function updateProject(index) {
    projectTitle.textContent = projects[index].title;
    projectDescription.textContent = projects[index].description;
    projectImage.src = projects[index].image;
    githubLink.href = projects[index].github;
    liveLink.href = projects[index].live;
}

// Event Listeners for Navigation
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
    updateProject(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
    updateProject(currentIndex);
});

// Initialize First Project
updateProject(currentIndex);
