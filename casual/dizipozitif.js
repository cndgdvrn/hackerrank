dizi = [-4, 3, -9, 0, 4, 1];



function test(dizi) {
  let deneme = [];
  let pozitif = 0;
  let negatif = 0;
  let sifir = 0;

  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > 0) {
      pozitif++;
    } else if (dizi[i] < 0) {
      negatif++;
    } else sifir++;
  }

  pozitif = pozitif / dizi.length
  negatif = negatif / dizi.length
  sifir = sifir / dizi.length;


  pozitif = Number(pozitif).toFixed(6)

  console.log(pozitif);
}

test(dizi);
