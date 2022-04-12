const width = window.innerWidth;
const landscape = document.getElementById("landscape");
const pb = document.getElementById("pb");

const navbar = document.getElementsByName("navbar")[0];

window.onscroll = function() {scroll()};

var sticky = navbar.offsetTop;

function scroll(){
    //console.log(navbar);
    
    //Handle NavBar
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }



