function bonAppetit(bill, k, b) {
  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    total = total + bill[i];
  }
  let fark = (total - bill[k])/2
  if (fark == b) {
    console.log("Bon Appetit");
  } else {
    console.log(fark);
  }
}

bonAppetit([3,10,2,9], 1,7)