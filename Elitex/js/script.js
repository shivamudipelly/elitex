let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

const skills = [
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', class: 'skill-bootstrap' },
    { name: 'C', icon: 'fas fa-copyright', class: 'skill-c' },
    { name: 'CSS', icon: 'fab fa-css3-alt', class: 'skill-css' },
    { name: 'Express', icon: 'fas fa-server', class: 'skill-express' },
    { name: 'GitHub', icon: 'fab fa-github', class: 'skill-github' },
    { name: 'HTML', icon: 'fab fa-html5', class: 'skill-html' },
    { name: 'Java', icon: 'fab fa-java', class: 'skill-java' },
    { name: 'JavaScript', icon: 'fab fa-js-square', class: 'skill-javascript' },
    { name: 'MongoDB', icon: 'fas fa-database', class: 'skill-mongodb' },
    { name: 'Node.js', icon: 'fab fa-node', class: 'skill-nodejs' },
    { name: 'Postman', icon: 'fas fa-envelope-open-text', class: 'skill-postman' },
    { name: 'PowerPoint', icon: 'fas fa-file-powerpoint', class: 'skill-powerpoint' },
    { name: 'Python', icon: 'fab fa-python', class: 'skill-python' },
    { name: 'React', icon: 'fab fa-react', class: 'skill-react' },
    { name: 'SQL', icon: 'fas fa-database', class: 'skill-sql' },
    { name: 'Excel', icon: 'fas fa-file-excel', class: 'skill-excel' },
    { name: 'MS Word', icon: 'fas fa-file-word', class: 'skill-msword' },
];

skills.sort((a, b) => a.name.localeCompare(b.name));

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillBox = document.createElement('div');
    skillBox.classList.add('skill-box', skill.class);

    const skillIcon = document.createElement('i');
    skillIcon.className = skill.icon;
    skillBox.appendChild(skillIcon);

    const skillName = document.createElement('span');
    skillName.textContent = skill.name;
    skillBox.appendChild(skillName);

    skillsContainer.appendChild(skillBox);
});




function opentab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add("active-tab")
}


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function navChanger(menu) {
    let nav = document.querySelector('nav')

    menu.classList.toggle('change')
    nav.classList.toggle("mobileNav")
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submissionStatus = document.getElementById('submission-status');
    const svg = document.getElementById('svg');

    function handleInput(event) {
        const input = event.target;
        const errorElement = document.getElementById(`${input.name}-error`);

        if (input.value.trim()) {
            input.classList.remove('input-error');
            errorElement.style.display = 'none';
        }
    }

    function handleChange(event) {
        const input = event.target;
        const errorElement = document.getElementById(`${input.name}-error`);

        if (input.value.trim() || input.type === 'email') {
            handleInput(event);
        }
    }

    form.addEventListener('input', handleInput);
    form.addEventListener('change', handleChange);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.style.display = 'none');
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.remove('input-error'));

        let isValid = true;

        const nameInput = form.elements['Name'];
        if (!nameInput.value.trim()) {
            showError(nameInput, 'name-error');
            isValid = false;
        }

        const emailInput = form.elements['Email'];
        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            showError(emailInput, 'email-error');
            isValid = false;
        }

        const messageInput = form.elements['Message'];
        if (!messageInput.value.trim()) {
            showError(messageInput, 'message-error');
            isValid = false;
        }

        if (isValid) {
            // If form is valid, hide the form and show the submission status
            form.style.display = "none";
            svg.style.display = 'flex'; // Ensure the status container is displayed
            submissionStatus.classList.add('open');
            // Hide status after 3 seconds
            setTimeout(() => {
                submissionStatus.classList.remove('open');
                submissionStatus.style.display = 'none';
                form.style.display = 'flex'; // Show the form again
                form.reset(); // Optionally reset the form
            }, 3000);
        }
    });

    function showError(input, errorId) {
        document.getElementById(errorId).style.display = 'block';
        input.classList.add('input-error');
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});



/** Porfolio Section code */

const projectList = document.querySelector('.project-list');

const projectItems = [
    {
        imageSrc: "../images/bustracking.png",
        link: "https://bus-tracking-system.vercel.app/",
        title: "Bus Tracking System",
        description: "MERN project"
    },
    {
        imageSrc: "../images/default.png",
        link: "/",
        title: "Google form Clone",
        description: "MERN project"
    },
    {
        imageSrc: "../images/cloudclub.png",
        link: "https://cloudclubau.github.io/cloud/",
        title: "Cloud club site",
        description: "Html,Css,Js"
    },
];

projectItems.map(projectItem => {
    projectList.innerHTML += `
        <div class="project-item">
            <div class="layer">
                <a href="${projectItem.link}" target="_blank"><i class="fa-solid fa-eye"></i><p>Live preview</p></a>
            </div>
            <img src="${projectItem.imageSrc}" alt="Rock Paper Game">
            <h3>${projectItem.title}</h3>
            <p>${projectItem.description}</p>
        </div>`
})


