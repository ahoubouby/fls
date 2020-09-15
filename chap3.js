const unary = (fn) => (args) => fn(args);
const constant = (v) => () => v;
const identity = (v) => v;
const gatherArgs = (fn) => (...args) => fn(args);
const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);
const reverseArgs = (fn) => (...args) => fn(...args.reverse());
const partialRight = (fn, presetArgs) => (...laterArgs) =>
  fn(...laterArgs, ...presetArgs);

const add = (x, y) => x + y;
const add2 = (x) => (y) => x + y;
const add3 = add2(3);

const tabString = ["1", "2", "3", "4"];

const parseInt = (str, radix) => {
  console.log(radix);
  return Number(str);
};

const fun = unary(parseInt);
const intTab = tabString.map(fun);

const words = "   new is the time for all .... ".split(/\s|\b/);

const filterWords = words.filter(identity);
// for interview question
const spreadArgs = (fn) => (args) => fn(...args);
function foo(x, y) {
  console.log("x + y = ", x + y);
}

function bar(fn) {
  fn([3, 4]);
}

const conbine = ([v1, v2]) => v1 + v2;
const sum = [3, 4, 4, 4, 53, 3, 32].reduce(gatherArgs(conbine), 0);

bar(spreadArgs(foo));
console.log(sum);

[1, 2, 3, 4].map(partial(add, 3)).forEach((el) => console.log(el));
