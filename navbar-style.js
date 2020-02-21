var navbar=document.getElementsByTagName("nav")[0]
var icon_size=navbar.getBoundingClientRect()["height"]
window.addEventListener("hashchange", function() { scrollBy(0, -icon_size) })
var right_stuff=navbar.getElementsByClassName("content-change")
var i;

for(i=0;i<right_stuff.length;i++){
  right_stuff[i].getElementsByClassName("A")[0].style.height=(0.8*icon_size).toString()+"px";
}