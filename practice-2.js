function make_avg (assignment1, assignment2,assignment3) {
  var averge = (assignment1 + assignment2 + assignment3) /3;
  return averge;

}
var assignment1 = 58;
var assignment2 = 60;
var assignment3= 60;
var totalMarks = make_avg(assignment1, assignment2, assignment3);
console.log(totalMarks);


