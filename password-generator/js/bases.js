var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function baseConvert(original, using) {
    using = Array.from(using);
    console.log(using);
    original = hexToInt(original);
    largestBase = 1
    while (largestBase <= original) {
        largestBase *= using.length;
    }
    r = ''
    while (largestBase > 1) {
        largestBase /= using.length;

        r += using[original / largestBase | 0];
        original %= largestBase;
    }
    return r;
}

function hexToInt(original) {
    number = 0;
    for(var i = 0; i < original.length; i++) {
        number *= 16;
        a = hexDigit(original[i]);
        // console.log(a);
        number += a;
    }
    return number;
}

function hexDigit(d) {
    a = parseInt(d);
    if (!isNaN(a)) {
        return a;
    }
    return d.charCodeAt(0) - 87;
}

function usingOptions(url) {
    s = lowercase;
    if (url.has("upper") && url.get("upper") == 'on') {
        s += uppercase;
    }
    if (url.has('numbers') && url.get('numbers') == 'on') {
        s += numbers;
    }
    return s;
}