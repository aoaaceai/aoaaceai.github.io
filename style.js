window.onscroll = function() {stickbar()};

var i;
var icon_size=document.getElementById("navbar-icon").height;
var follow_icon=document.getElementsByClassName("navbar-icon-follow");
for (i=0;i<follow_icon.length;i++){
  follow_icon[i].style.height=icon_size.toString()+"px";
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var main = document.getElementById("content");

function stickbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    main.style.marginTop=navbar.getBoundingClientRect()["height"].toString()+"px";
  } else {
    navbar.classList.remove("sticky");
    main.style.marginTop="0px";
  }
}

