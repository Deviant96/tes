function arrAdder(arr) {
  let a = ""
  
  for(let i = 0;i < arr[0].length;i++){
    for(let y = 0;y < arr.length;y++){
      if(arr[y][i] !== undefined){
         a += arr[y][i]
      }
    }
    
    a += i < arr[0].length - 1 ? " " : ""
  }
  
  return a
}