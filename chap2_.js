function foo(x, y, z, ...args) {
  console.log(x, y, z, args); //
}

foo(); //
foo(1, 2, 3); //
foo(1, 2, 3, 4); //
foo(1, 2, 3, 4, 5); //

function foo2({ x, y } = {}) {
  console.log(x, y);
}

foo2({ y: 3 }); //
//---------- output

function output() {
  return;
}

console.log(output());

function foo3(x) {
  if (x > 10) return x + 1;

  var y = x / 2;
  if (y > 3) {
    if (x % 2 == 0) return x;
  }
  if (y > 1) return y;
  return x;
}

console.log(foo3(2));
console.log(foo3(4));
console.log(foo3(8));
console.log(foo3(12));
function forEach(lst, fn) {
  for (let el of lst) {
    fn(el);
  }
}

const tab = [1, 2, 3, 4];

forEach(tab, (v) => console.log("print value", v));

function runningCouner(start) {
  var val = start;

  return function current(increment = 1) {
    val = val + increment;
    return val;
  };
}

var score = runningCouner(0);

console.log(score());
console.log(score());
console.log(score(13));
console.log(score());

var x = function () {};
console.log(x.name);
var newTab = tab.map((el) => el.name);
console.log(...newTab);
