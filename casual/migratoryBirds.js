function migratoryBirds(arr) {
//     const max = Math.max(...arr)
//   let newArr = [];   
//   for (let i = 0; i < max; i++) {
//     newArr.push(0);
//   }
//   arr.forEach((n) => {
//     newArr[n - 1]++;
//   });
//   return newArr.indexOf(Math.max(...newArr)) + 1;

    const counter = {}
    arr.forEach((n)=>{
        if(counter[n]){
            counter[n]++
        }else{
            counter[n]=1
        }
    })
    let max = 0
    let birdType = 0
    for(const birdId in counter){
        if(counter[birdId]>max){
            max = counter[birdId]
            birdType=birdId
        }
    }
    console.log(birdType);
    

}

migratoryBirds([1, 4, 4, 4, 5, 3])
