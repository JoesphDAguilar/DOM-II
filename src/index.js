import './less/index.less'

// Your code goes here!

// Event Listener 1; Console logs message when clicking header img
const funBus = document.querySelector('header img');
funBus.addEventListener("click", function(evt) {
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


// Event Listener 3
const navLink = document.querySelector('.nav-link');
navLink.addEventListener('mouseover', function(evt) {
    evt.target.style.fontSize = '2rem';
    setTimeout(function() {
        evt.target.style.fontSize = "";
      }, 500);
    }, false);
// Event Listener 4

// Event Listener 5

// Event Listener 6

// Event Listener 7

// Event Listener 8

// Event Listener 9

// Event Listener 10