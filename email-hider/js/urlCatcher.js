var url = new URL(document.URL).searchParams;

if(url.has("password") && url.has("service")) {
    
    var password = url.get("password");

    var service = url.get("service").split("");
    var border = Math.ceil(service.length / 2);
    var salt1 = service.slice(0, border).join("");
    var salt2 = service.slice(border).join("");

    password = CryptoJS.SHA256(salt1+password+salt2).toString();

    console.log("succeeded");

    $("#generated-password").text(
        url.has("limit")
        ?password.split("").slice(0, parseInt(url.get("limit"), 10)).join("")
        :password
    );
    $('#password-display').css("display", "block");
}

function copyToClipboard(id) {
    var tempInput = document.createElement("textarea");
    tempInput.value = $('#'+id).text();
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    tempInput.remove();
}

console.log("urlCatcher loaded");