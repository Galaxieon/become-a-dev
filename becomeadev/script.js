function showMore() {
    document.getElementById("more").style.display = "block";
    document.getElementById("less-btn").style.display = "block";
    document.getElementById("more-btn").style.display = "none";
    document.getElementById("alert").style.display = "block";
}
function showLess() {
    document.getElementById("more").style.display = "none";
    document.getElementById("less-btn").style.display = "none";
    document.getElementById("more-btn").style.display = "block";
}
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}