let subjects = [
    "free prize worth millions free",
    "ten tips for a carefree lifestyle",
  ];
  let spam_words = ["free", "money", "win", "millions"];
function getSpamEmails(subjects, spam_words) {
   
    let sonuc = 0;
    let spamSonuc = [];
   
    for (let i = 0; i < 10; i++) {
      sonuc = 0;
      for (let j = 0; j < spam_words.length; j++) {
        let yeniDizi = subjects[i].split(" ")  
        if (yeniDizi[i].includes(spam_words[j])) {
          sonuc++;
          if (sonuc >= 2) {
            spamSonuc.push("spam");
            break;
          }
        }
      }
      spamSonuc.push("not_spam");
      break;
    }
    return spamSonuc;


}
console.log(getSpamEmails(subjects,spam_words));



for(let i=0;i<5;i++){
    console.log("can");
    if(i==3){
        return
    }
}