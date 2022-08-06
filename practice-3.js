// function make_avg(array) {
//   var total = 0;
//   for(let i = 0; i< array.length ; i++){
//     const number = array[i];
//     total += number;
//   }
//   var avg = total / array.length
//   return avg;
// }
// var avg = make_avg([25,20,15]);
// console.log(avg);

function make_avg (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    var numbers = array[i];
    // console.log(numbers);
    total+= numbers;
   
  }


  return total / array.length;

}



 var avg = make_avg([30,25,10]);
 
console.log(avg);