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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);

        // Create an object from the form data
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Log the data to the console (for debugging)
        console.log('Form Data:', data);

        // Here, you can add code to send the data to a server, or handle it as needed
        // Example: 
        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 'Content-Type': 'application/json' }
        // }).then(response => response.json())
        //   .then(result => console.log('Success:', result))
        //   .catch(error => console.error('Error:', error));
    });
});

