window.onscroll = function() {stickbar()};
var icon_size=document.getElementById("navbar-icon").height;

var i;
var j;
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
    main.style.paddingTop=navbar.getBoundingClientRect()["height"].toString()+"px";
  } else {
    navbar.classList.remove("sticky");
    main.style.paddingTop="0px";
  }
}

var dropdowns=document.getElementsByClassName("dropdown");
for(i=0;i<dropdowns.length;i++){
  var size=dropdowns[i].getElementsByTagName("button")[0].getBoundingClientRect()["width"].toString()+"px";
  var links=dropdowns[i].getElementsByTagName("a");
  for(j=0;j<links.length;j++){
    links[j].style.minWidth=size;
    links[j].style.paddingLeft=0;
    links[j].style.paddingRight=0;
  }
}