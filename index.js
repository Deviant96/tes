    function arrAdder(arr) {
  let a = ""
  
  for(var i = 0;i < arr.length;i++){
    
    for(let y = 0;y < arr.length;y++){
      if(arr[y][i] !== undefined){
         a += arr[y][i]
      }
    }
    
    a += i < arr[i].length - 1 ? " " : ""
  }
  
  return a
}