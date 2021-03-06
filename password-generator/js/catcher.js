$.getScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha256.js");

function catchSubmission() {
    console.log("catchSubmission triggered");
    $('#hashnt').submit(function() {
        var passwordBox = $('input[name=password]');
        var beforeHash = passwordBox.val();
        var afterHash = CryptoJS.SHA256(beforeHash).toString();
        passwordBox.val(afterHash);
    });
}

function catchURL() {
    console.log("catchURL triggered");
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
        password = baseConvert(password, usingOptions(url));
        $("#generated-password").text(
            password.split("").slice(0, limit).join("")
        );
        $('#password-display').css("display", "block");
    }
}

function copyToClipboard(id) {
    var tempInput = document.createElement("textarea");
    tempInput.value = $('#'+id).text();
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, tempInput.value.length);
    document.execCommand("copy");
    tempInput.remove();
}
