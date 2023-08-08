// function pageCount(n, p) {
//   const fromCount = Math.floor(p / 2);
//   const backCount = Math.floor(n / 2) -fromCount
  

//   return Math.min(fromCount, backCount);
// }

function pageCount(n, p) {
    let fromFront = Math.floor(p / 2);
    let total = Math.floor(n / 2)
    let fromBack = total-fromFront
    return Math.min(fromFront, fromBack);
}

console.log(pageCount(12, 8));
