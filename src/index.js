
// You should implement your task here.
// [
//  [ 12, 32, 23 ],
//  [ 14, 25, 65 ],
//  [ 77, 81, 93 ],
// ]

module.exports = function towelSort (matrix) {
  if (matrix==undefined){
    return [];
  }
  var newArr = []; // [], [12, 23, 32, 14, 25, 65, 77, 81, 93 ]
  for(var i = 0; i < matrix.length; i++) // i=3 , matrix.length = 3;
  {
    if (i%2==0)     // 0 index : take normally, 1 reverse, 2 normal, 3 reverse...
    {
      newArr = newArr.concat(matrix[i]);
    }
    else {
      newArr = newArr.concat(matrix[i].reverse());
    }
  }
   return newArr;
}
