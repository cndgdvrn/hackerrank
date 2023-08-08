function countApplesAndOranges(s, t, a, b, apples, oranges) {

  const landedApples = apples
    .map((apple) => apple + a)
    .filter((apple) => apple >= s && apple <= t).length;
  const landedOranges = oranges
    .map((orange) => orange + b)
    .filter((orange) => orange >= s && orange <= t).length;

  console.log(landedApples);
  console.log(landedOranges);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
