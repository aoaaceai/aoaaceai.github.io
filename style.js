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

function github_on(x,y){
  x.innerHTML="I suck";
}
function github_out(x){
  x.innerHTML='<img src="images/github-logo.png" height=40px>';
}

function wca_on(x){
  x.innerHTML="WCA Page";
}
function wca_out(x){
  x.innerHTML='<img src="https://www.worldcubeassociation.org/files/WCAlogo_notext.svg" height=40px>'
}