// please have cryptojs imported before using it

$('#hashnt').submit(function() {
    var passwordBox = $('input[name=password]');
    var beforeHash = passwordBox.val();
    var afterHash = CryptoJS.SHA256(beforeHash).toString();
    passwordBox.val(afterHash);
});


console.log("submitCatcher loaded");