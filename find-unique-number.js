//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

//solution
function findUniq(arr) {
    // do magic
    arr.sort((a,b)=> a-b)
    if(arr[0] === arr[1]){
      return arr[arr.length-1]
    }
    else if(arr[1] === arr[2]){
      return arr[0]
    }
}