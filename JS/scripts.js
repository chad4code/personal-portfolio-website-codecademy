// Global variables
let aboutLearning = document.getElementById('about-learning');
let manBoxClicked = false;
let stickManContainer = document.getElementById('stick-man-container');
stickManContainer.style.display = 'none';
let topics = document.getElementsByTagName('h4');
let explainBox = document.getElementsByClassName('explain-box')[0];
let textBox = document.getElementsByClassName('explain-box');
let hBox = document.getElementsByTagName('h4');
let contactInfoSection = document.getElementById('contact-info');
let contactContainer = document.getElementsByClassName('contact-container')[0];
let showContact = document.getElementById('contact');
let contactButton = document.getElementById('show-contact');
let contactBox = document.getElementsByTagName('h3')[0];
let contactClicked = false;

// stick man functionality
function changeColorTheme() {
    aboutLearning.style.backgroundColor = 'rgb(25, 25, 112)';
    aboutLearning.style.color = 'rgb(211, 211, 211)';
    textBox[0].style.border = '0.75em solid rgb(211, 211, 211)';
    textBox[0].style.backgroundColor = 'rgb(250, 250, 250)';
    for (const element of hBox) {
        element.style.backgroundColor = 'rgb(64, 64, 64)';
        element.style.borderRadius = '0.5em';
        element.style.textDecoration = 'underline';
    }
    explainBox.style.color = 'rgb(64, 64, 64)';
}

const revertColorTheme = () => {
    aboutLearning.style.backgroundColor = 'rgb(211, 211, 211)';
    aboutLearning.style.color = 'rgba(0, 0, 205, 0.9)';
    for (const element of hBox) {
        element.style.backgroundColor = 'inherit';
        element.style.textDecoration = 'none';
    }
    explainBox.innerHTML = '<p>Press a suject to see a description.</p>';
}

document.getElementById('about-learning').addEventListener('mousedown', function () {
        if (manBoxClicked === false) {
            stickManContainer.style.display = 'flex';
            stickManContainer.style.justifyContent = 'center';
            stickManContainer.style.padding = '3em';
            changeColorTheme();
            manBoxClicked = true;
            console.log(manBoxClicked);
        }
    });

contactInfoSection.onmousedown = function () {
    if (manBoxClicked === true) {
        stickManContainer.style.display = 'none';
        revertColorTheme();
        console.log(manBoxClicked);
        manBoxClicked = false;
    }
}

// explain box functionality
const displayOpt = () => {
    if (explainBox.style.height > '15em') {
        explainBox.style.maxWidth = '20em';
    }
}

topics[0].onmousedown = function() {
    explainBox.innerHTML = '<p>HTML provides the structure for a webpage.</p>';
    displayOpt();
}
topics[1].onmousedown = function() {
    explainBox.innerHTML = "<p>CSS allows us to style and position elements on a webpage. The color of this text was set by a CSS rule.</p>";
    displayOpt();
}
topics[2].onmousedown = function() {
    explainBox.innerHTML = '<p>JavaScript, shortened to js, adds functionality to a webpage. It is what inserted this text into this box.</p>';
    displayOpt();
}
topics[3].onmousedown = function() {
    explainBox.innerHTML = '<p>Git is the industry-standard Version Control Software(VCS). It helps developers keep track of their files. Github is an online hosting service that can work with Git on local devices to allow teams to collaborate through the cloud.</p>'
    displayOpt();
}
topics[4].onmousedown = function() {
    explainBox.innerHTML = '<p>Responsive web design is configuring a website to respond to changes in screen size. Devs use these design processes to make their websites look nice on all sizes and shapes of screens. A properly resposive website can look entirely different on a mobile device than on a laptop or monitor.</p>'
    displayOpt();
}

// Contact button
contactBox.onclick = function() {
    if (contactClicked === false) {
        showContact.style.display = 'block';
        contactButton.innerHTML = '-';
        contactContainer.style.backgroundColor = 'rgb(25, 25, 112)';
        contactContainer.style.color = 'rgb(211, 211, 211)';
        contactClicked = true; 
    } else {
        showContact.style.display = 'none';
        contactButton.innerHTML = '+';
        contactContainer.style.backgroundColor = 'inherit';
        contactContainer.style.color = 'inherit';
        contactClicked = false;
    }
    
}