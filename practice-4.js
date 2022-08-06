// no return has parameter
function odd_even(num) {
  if (num% 2 ==0) {
    console.log("This is odd Nuber")
  }
  else {
    console.log("this is even number")
  }
}
console.log(odd_even(6));



// has return has parameter

function odd_evenCheck(value) {
  if( value % 2 ==0) {
    return "this is odd Number"
  }
  else if ( value % 2 !== 0) {
       return "this is a even number"
  }
  else{
    return"its NAN"
  }

}

console.log(odd_evenCheck(5));

