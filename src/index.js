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
}, false)

// Event Listener 4; changes opacity for .content-section
const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('mouseover', function(evt) {
    evt.target.style.opacity = '.4%';
    setTimeout(function() {
        evt.target.style.opacity= "";
    }, 1000);
}, false)

// Event Listener 5; changes background color for .inverse-content
const inverseSection = document.querySelector('.inverse-content');
inverseSection.addEventListener('mouseover', function(evt) {
    evt.target.style.background = '#87ceeb ';
    setTimeout(function() {
        evt.target.style.background = '';
    }, 1000);
}, false)

// Event Listener 6
inverseSection.addEventListener('mouseover', function(evt) {
    evt.target.style.color = 'white';
    setTimeout(function() {
        evt.target.style.color = '';
    }, 1000);
}, false)
// Event Listener 7

// Event Listener 8

// Event Listener 9

// Event Listener 10