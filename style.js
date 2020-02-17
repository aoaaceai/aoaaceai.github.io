window.onscroll = function() {stickbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function mouseon(x){
  x.innerHTML="I suck";
}
function mouseout(x){
  x.innerHTML='<img src="images/github-logo.png" width="22px" height="22px">';
}
