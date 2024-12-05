//Bagian Slide Bar
let slide = document.getElementById("slide")
let cSlide = false

function menu(){
    if (cSlide == false){
        slide.style.left = "-100%"
        cSlide = true
    }else {
        slide.style.left = "0%"
        cSlide = false
    }
} 

//Tombol Cari
function search(){
    let cari = prompt("Pencarian")
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("Nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}