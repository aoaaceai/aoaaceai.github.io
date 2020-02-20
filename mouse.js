function zhuyuangang_on(x){
    x.innerText="2020竹園岡附近公開賽";
    x.style.fontStyle="normal";
}
function zhuyuangang_out(x){
    x.innerText="2020竹園岡公開賽";
    x.style.fontStyle="italic";
}

function gravity_on(x){
  var img=document.getElementById("gravity-image");
  img.style.visibility="visible";
  img.style.marginTop=window.getComputedStyle(x).getPropertyValue("font-size");
  img.style.paddingTop="0.5em";
  img.style.right="40%"
  img.style.width=(window.innerWidth*0.3).toString()+"px";
}

function gravity_out(x){
  document.getElementById("gravity-image").style.visibility="hidden";
}

function ep_on(x){
  document.getElementById("Ep-hid").style.visibility="visible";
}
function ep_out(x){
  document.getElementById("Ep-hid").style.visibility="hidden";
}