function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

module.exports = rgbToHexColor

//========================================================

function RGBtoHEX(...rgb){
    if (rgb.some(c => typeof c != 'number' ||  c < 0 || c > 255)){
        return undefined
    }
    return '#' + rgb.map(decToHex).join('').toUpperCase()

    function decToHex(n){
        return ('00' + n.toString(16)).slice(-2)
    }
}
// module.exports = RGBtoHEX
