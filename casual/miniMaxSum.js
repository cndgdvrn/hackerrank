let arr = [10, 3, 5, 7, 9];
let min = arr[0];
let max = arr[0];
let toplam = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
  toplam = toplam + arr[i]
}

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }



console.log(min, max,toplam);
