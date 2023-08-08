let denemeSayi = 0;
let subjects = [
  "free prize worth millions free",
  "ten tips for a carefree lifestyle",
];
let spam_words = ["free", "money", "win", "millions"];
let sonuc;
let yeniDizi = [];

for (let i = 0; i < 10; i++) {
  sonuc = 0;
  yeniDizi = "subjects [i]".split(" ");
  for (let j = 0; j < spam_words.length; j++) {
    if (yeniDizi[i].includes(spam_words[j])) {
      sonuc++;
      console.log(sonuc);
    }
  }
}
 