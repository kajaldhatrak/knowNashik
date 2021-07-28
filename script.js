//responsive navigation dom manupulation
//this function will change class name for navigation container when their is 
//change in screen size
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

