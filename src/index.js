import './less/index.less'

// Your code goes here!

// Event Listener 1; Console logs message when clicking header img
const funBus = document.querySelector('header img');
funBus.addEventListener("click", function() {
    console.log('Welcome to the fun bus!');
})

// Event Listener 2; changes logo-heading font color to yellow and returns to default color
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", function(evt) {
    evt.target.style.color = 'yellow';
    setTimeout(function() {
        evt.target.style.color = "";
      }, 1000);
    }, false);

// Event Listener 3; Changes nav links sizes on mouse over

const navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', function(evt) {
    evt.target.style.fontSize = '2rem';
    setTimeout(function() {
        evt.target.style.fontSize = "";
      }, 500);
})

// Event Listener 4
const contentHeader = document.querySelector('.content-section')
contentHeader.addEventListener('mouseover', function(evt) {
    evt.target.style.opacity = '.4%';
    setTimeout(function() {
        evt.target.style.opacity= "";
    }, 1000);
})

// Event Listener 5

// Event Listener 6

// Event Listener 7

// Event Listener 8

// Event Listener 9

// Event Listener 10