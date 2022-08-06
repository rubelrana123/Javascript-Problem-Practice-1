 var room = {
   table : 1,
   chair: 3,
   bed : 4,
   fan: 2,
  }
 
  var elements = Object.keys(room);
  console.log(elements);
  var value = Object.values(room);
  console.log(value)

  for ( var i = 0; i< elements.length; i++) {
    var properties =  elements[i];
    // console.log(properties);
    var propertieName = room[properties];
    console.log(properties ,propertieName);
  };


//   console.log(room.bed);

//   var roomarr = Object.keys(room);
//   console.log(roomarr);
//   for ( var i = 0; i< roomarr.length; i++) {
//     var elements = roomarr[i];
//     var elementsValue = room[elements];
//     // console.log(elements , elementsValue); 

// }

// //for in loop
// for ( var elements in room) {
//   const value = room[elements];
//   console.log(elements, value);
// }

// const obj = { name: 'Adam', age: 20, location: 'Nepal' };
// console.log(Object.entries(obj));