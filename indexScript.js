const width = window.innerWidth;
const landscape = document.getElementById("landscape");
const pb = document.getElementById("pb");

const navbar = document.getElementsByName("navbar")[0];

window.onscroll = function() {scroll()};

//var sticky = navbar.offsetHeight;
var sticky = landscape.offsetHeight;

function scroll(){
    console.log(console.classList);
    
    //Handle NavBar
    if (window.pageYOffset >= (sticky + 110)) {
      console.log(sticky);
        navbar.classList.add("sticky");
        //navbar.style.zIndex = "10";
      } else {
        navbar.classList.remove("sticky");
      }
    }