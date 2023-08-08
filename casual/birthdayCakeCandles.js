const arr = [3, 4, 2, 1, 4];

let max = arr[0];
let tane = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

for(let i=0;i<arr.length;i++){
    if(arr[i]==max){
        tane++
    }
}

console.log(max,tane);
