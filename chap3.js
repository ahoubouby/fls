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

const stricCurry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = (prevArgs) => (nextArg) => {
    const args = [...prevArgs, nextArg];
    if (args.length >= arity) return fn(...args);
    else return nextCurried(args);
  })([]);

const curry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = (prevArgs) => (...nextArg) => {
    const args = [...prevArgs, ...nextArg];
    if (args.length >= arity) return fn(...args);
    else return nextCurried(args);
  })([]);

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

function foo2(x, y, z, ...rest) {
  console.log(x, y, z, rest);
}

const f = partialRight(foo2, "z:last");
// f(1, 2); // 1, 2, "z:last" []
// f(1, 2, 3, 4);

const fun1 = (name, lastname) => `${name}--${lastname}`;
const log = (v) => console.log("log a value = ", v);
const curriedFun1 = curry(fun1);

// const curry = (fn, arity = fn.length, nextCurried) =>
//   (nextCurried = (prevArgs) => (nextArgs) => {
//     const args = [...prevArgs, nextArgs];
//     if (args.length >= arity) return fn(...args);
//     else nextCurried(args);
//   })([]);

const result = [1, 2, 3, 4, 5].map(curry(add)(3));
log(result);
