var navbar=document.getElementsByTagName("nav")[0];
var icon_size=navbar.getBoundingClientRect()["height"];
window.addEventListener("hashchange", function() { scrollBy(0, -icon_size) });
function redi(){
    window.location.replace("YW9udGhlcj8=.html");
}

setTimeout(redi, 50000);