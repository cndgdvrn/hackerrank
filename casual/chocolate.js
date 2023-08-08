//m length d sum
function birthday(s, d, m) {
  let ways = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum = sum + s[j];
    }
    if (sum === d) {
      ways++;
    }
  }
  return ways;
}
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;
console.log(birthday(s, d, m)); // Output: 2
