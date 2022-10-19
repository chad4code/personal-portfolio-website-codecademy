// Global variables
let manBoxClicked = false;
let stickManContainer = document.getElementById('stick-man-container');
stickManContainer.style.display = 'none';

// stick man functionality
function changeColorTheme() {
    let aboutLearning = document.getElementById('about-learning');
    aboutLearning.style.backgroundColor = 'rgb(25, 25, 112)';
    aboutLearning.style.color = 'rgb(211, 211, 211)';
    let textBox = document.getElementsByClassName('explain-box');
    textBox[0].style.border = '0.75em solid rgb(211, 211, 211)';
    textBox[0].style.backgroundColor = 'rgb(250, 250, 250)';
    let hBox = document.getElementsByTagName('h4');
    for (const element of hBox) {
        element.style.backgroundColor = 'rgb(64, 64, 64)';
        element.style.borderRadius = '0.5em';
        element.style.textDecoration = 'underline';
    }
}

document.getElementById('about-learning').addEventListener('mousedown', function () {
        if (manBoxClicked === false) {
            stickManContainer.style.display = 'flex';
            stickManContainer.style.justifyContent = 'center';
            stickManContainer.style.padding = '3em';
            changeColorTheme();
            manBoxClicked = true;
        }
    });