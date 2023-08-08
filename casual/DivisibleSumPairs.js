// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor

function divisibleSumPairs(n, k, ar) {
  let countPairs = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum = ar[i] + ar[j];
      if (sum % k === 0) {
        countPairs++;
      }
    }
  }
  return countPairs;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
