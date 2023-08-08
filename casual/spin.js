function spinWords(string){
  
    let tersten =[];
    
    for(let i=(string.length-1);i>=0;i--){
    tersten.push(string.charAt(i));
  }
  tersten = tersten.toString();
  tersten = tersten.split(',').join('');
    return tersten;
    
    
    
    
  }