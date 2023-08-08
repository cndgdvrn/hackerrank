function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let maxMin = [0, 0];
  scores.forEach((score) => {
    if (score > max) {
      max = score;
      maxMin[0]++;
    } else if (score < min) {
      min = score;
      maxMin[1]++;
    }
  });

  return maxMin;
}

breakingRecords([12, 24, 10, 24]);
