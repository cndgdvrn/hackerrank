function kangaroo(x1, v1, x2, v2) {
  let esitMi = 0;
  for (let i = 0; i < 5000; i++) {
    if (x1 + (v1 * i) == x2 +( v2 * i)) {
      esitMi++;
      if(esitMi>0){
        break
      }
    }
  }
  if(esitMi>0) return "YES"
  else return "NO"
}

console.log(kangaroo(0, 2, 5, 3));
