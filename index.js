const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

let toRgb = process.argv[2];
console.log(hexToRgb(toRgb));

/*function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

console.log(process.argv);
//let toHex = [process.argv[2], process.argv[3], process.argv[4]];
console.log(rgbToHex(process.argv[2], process.argv[3], process.argv[4] ));*/