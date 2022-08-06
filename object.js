// const car = {
//   type : "pulser",
//   disk: "dubble",
//   cubicCapacity :"150",

// };

// console.log( car.type);
//  var myRoom = {
//    fee : 500,
//    area : "Small",
//    sit : "2sit",

//  }
//  console.log(myRoom.fee);
//  myRoom.area = "big";
//  console.log(myRoom.area);

var shopingCart = {
  books : 5, 
  drink : "cocacola",
  rice : "5kg",
  pen : 5,

}
// console.log(shopingCart[books]);
// set properties values
// shopingCart.books = 10;
// shopingCart['books'];

console.log(shopingCart.books);
console.log(shopingCart['rice']);
var propertieName = "drink";
console.log(shopingCart[propertieName]);

var properties = Object.keys(shopingCart);
var keysValue = Object.values(shopingCart);
console.log(properties);
console.log(keysValue);

