// let saat = "06:05:45PM";
// let x = saat.charAt(0) + saat.charAt(1);
// x = parseInt(x);

// if (saat.charAt(8) == "P") {
//   if (x == 12) {
//     saat=saat.substring(0,8)
//   } else {
//     (saat = `${x + 12}` + saat.substring(2,8));
//   }
// }

// if (saat.charAt(8) == "A") {
//   if (x == 12) {
//     x = x - 12;
//     saat = `0${x}` + saat.substring(2,8);
//   } else {
//     saat=saat.substring(0,8)
//   }
// }


// var s = "Hello world";
// var index = 3;
// s = s.substring(0, index) + "x" + s.substring(index + 1);
// console.log(s);


function timeConversion(saat) {

    let x = saat.charAt(0) + saat.charAt(1);
    x = parseInt(x);

    if (saat.charAt(8) == "P") {
        if (x == 12) {
            saat = saat.substring(0, 8)
        } else {
            (saat = `${x + 12}` + saat.substring(2, 8));
        }
    }

    if (saat.charAt(8) == "A") {
        if (x == 12) {
            x = x - 12;
            saat = `0${x}` + saat.substring(2, 8);
        } else {
            saat = saat.substring(0, 8)
        }
    }
    return saat
}


console.log(timeConversion("07:05:45PM"));