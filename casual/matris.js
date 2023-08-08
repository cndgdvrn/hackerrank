// let sol = 0
//     let sag = 0
//     for(let i=0;i<arr.length;i=i+4){
//         sol = sol+ arr[i]
//     }
//     for(let i=2;i<arr.length;i=i+2){
//         sol = sol+ arr[i]
//     }
//     let x = Math.abs(sol-sag)
//     console.log(x);

let items = [
  [1, 2, 5, 2], // 0,0   //0,2    //0,3
  [3, 2, 7, 6], // 1,1   //1,1    //1,2  
  [8, 6, 9, 1],                   //2,1  
  [3, 2, 7, 6], // 2,2   //2,0    //3,0  
];


let sol = 0;
let sag = 0;

for (let i = 0; i < items.length; i++) {
  sol = sol + items[i][i];
}

for(let i=0,j=items.length-1; i<items.length; i++,j--){
    sag = sag + items[i][j]
}
console.log(sol,sag);
console.log(Math.abs(sol-sag));
