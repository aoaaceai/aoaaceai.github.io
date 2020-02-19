var icon_size=document.getElementById("navbar-icon").height;
function github_on(x){
    x.innerHTML="I suck";
}
function github_out(x){
  x.innerHTML="<img src=\"../images/github-logo.png\" height="+icon_size.toString()+"px>";
}

function wca_on(x){
  x.innerHTML="WCA Profile";
}
function wca_out(x){
  x.innerHTML="<img src=\"https://www.worldcubeassociation.org/files/WCAlogo_notext.svg\" height="+icon_size.toString()+"px>";
}