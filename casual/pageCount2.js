function pageCount(sayfaSayisi, istenenSayfa) {
  let totalPage = sayfaSayisi % 2 === 0 ? sayfaSayisi + 1 : sayfaSayisi;
  let newArr = [];
  let innerArr = [];

  for (let i = 0; i < totalPage + 1; i = i + 2) {
    innerArr = [];
    for (let j = i; j < i + 2; j++) {
      innerArr.push(j);
    }
    newArr = [...newArr, innerArr];
  }

  let frontCount = 0;
  let backCount = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === istenenSayfa || newArr[i][1] === istenenSayfa) {
      break;
    }
    frontCount++;
  }

  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i][0] === istenenSayfa || newArr[i][1] === istenenSayfa) {
      break;
    }
    backCount++;
  }

  return Math.min(frontCount,backCount)
}
// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]
console.log(pageCount(7,4));