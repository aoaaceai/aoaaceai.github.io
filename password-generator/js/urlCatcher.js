var url = new URL(document.URL).searchParams;

if(url.has("password") && url.has("service") && url.has("limit")) {
    
    var password = url.get("password");

    var service = url.get("service").split("");
    var border = Math.ceil(service.length / 2);
    var salt1 = service.slice(0, border).join("");
    var salt2 = service.slice(border).join("");

    password = CryptoJS.SHA256(salt1+password+salt2).toString();

    var limit = parseInt(url.get("limit"), 10);
    if(isNaN(limit)) {
        limit = password.length;
    }
    $("#generated-password").text(
        password.split("").slice(0, limit).join("")
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