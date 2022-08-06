function foo() {
  bar();
  return "foo";
  
}
function bar() {
  return "bar"
}
console.log(foo());