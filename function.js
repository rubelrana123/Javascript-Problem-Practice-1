function map(f,a) {
  const result = [];
  for (let i = 0; i< a.length; i++) {
    result[i]= f(a[i]);

  }
  return result;

}
  console.log(map(5,8));

// function myFunction(p1, p2) {
// 	return p1 + p2;
// }
// console.log(myFunction(4,3));

// function students(name) {
//   console.log("Students Name :" + " " + name );
//   // console.log(name)
// }
// var name = "sabana"
// students(name)

// function add(a,b,c,d,e) {
//   var sum = a+ b+ c + d + e;
//   console.log(sum)

// }
// add(2,5,1,6,8,4);

// function add(num1, num2) {
//   var sum = num1 + num2;
//   console.log(num1 , num2);
//   return sum;

// }
// console.log(add(25,12));

// function bringSingara (money) {
//   var priceSingrara = 10;
//   var quantity = money / priceSingrara ;

//   return quantity /2;
// }

// var amount = bringSingara(200);
// console.log(amount);

// const factorial = function fac(n){
//   return n < 2 ? 1 : n*fac(n-1); // condition is true then return expresion and condion false return expresion 2
// }
// console.log(factorial(5))

// var x = myFunction(4, 3);
// console.log(x);
// function myFunction(a, b) {
// 	return a * b;
// }

// fahrenheit

// function toCelsius (fahrenheit){
//   return (5/9) * (fahrenheit - 32);

// }
// var x = toCelsius(104);
// var temperature = x.toFixed(2)
// console.log(temperature)

// function marks ( assignment1 , assignment2,assignment3){
//   var averge = (assignment1 + assignment2 + assignment3) /3;
//   return averge;
// }
// var assignment1 = 58;
// var assignment2 = 60;
// var assignment3 = 60;
// console.log(marks(assignment1, assignment2,assignment3));
