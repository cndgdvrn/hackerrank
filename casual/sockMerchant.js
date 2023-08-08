function sockMerchant(n, ar) {
  const pairs = {};
  let sum = 0;

  ar.forEach((n) => {
    if (pairs[n]) {
      pairs[n]++;
    } else {
      pairs[n] = 1;
    }
  });

  for (let n in pairs) {
    sum = sum + Math.floor(pairs[n]/2)
  }
    console.log(sum);
}

sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]);
