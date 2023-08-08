// let subjects = [
//     "free prize worth millions",
//     "ten tips for a carefree lifestyle",
//   ];
//   let spam_words = ["free", "money", "win", "millions"];


// function getSpamEmails(subjects, spam_words) {
   
//       let sonuc = 0;
//       let spamSonuc = [];
     
//       for (let i = 0; i < subjects.length; i++) {
//         sonuc = 0;
//         for (let j = 0; j < spam_words.length; j++) {
//           if (subjects[i].includes(spam_words[j])) {
//             sonuc++;
//             if (sonuc >= 2) {
//               console.log("SPAM");
//               spamSonuc.push("SPAM");
//               break;
//             }
//           }
//         }
//         console.log("NOT SPAM");
//         spamSonuc.push("NOT SPAM");
//         break;
//       }
//       console.log(spamSonuc);
// }

// console.log(getSpamEmails(subjects,spam_words));
let denemeSayi =0;
 let subjects = [
     "free prize worth millions free",
     "ten tips for a carefree lifestyle",
   ];
   let spam_words = ["free", "money", "win", "millions"];


   


function getSpamEmails(subjects, spam_words) {
   

  let spamSonuc = [];
 
  for (let i = 0; i < subjects.length; i++) {
    let sonuc = 0;
    let yeniDizi = subjects[0].split(" ") 
    for (let j = 0; j < spam_words.length; j++) {
      if (yeniDizi[i].includes(spam_words[j])) {
        console.log(yeniDizi[i]);
        sonuc++;
        console.log(sonuc);
        if (sonuc >= 2) {
          spamSonuc.push("SPAM");
          break;
        }
      }
    }
    spamSonuc.push("NOT SPAM");
    break;
  }
}
 
console.log(getSpamEmails(subjects,spam_words));


























