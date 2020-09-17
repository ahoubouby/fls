const separator = "-------------------------------------------------";
const unary = (fn) => (arg) => fn(arg);
const printOutputCode = (codeReturn) => {
  console.log(separator);
  console.log(codeReturn);
  console.log(separator);
};
//
const partialRight = (fn, presetArgs) => (...laterArgs) =>
  fn(...laterArgs, presetArgs);
const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);

const text =
  "To compose two functions together, pass the  output of the first function call as the input of the  second function call.";
// utility function
const compose2 = (fn2, fn1) => (orignValue) => fn2(fn1(orignValue));

const composes = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

//------ compose

const shortWord = (word) => word.length > 4;
const skipShortWords = (words) => words.filter(unary(shortWord));

const wordsFilter = (words, predicate) => words.filter(unary(predicate));
const not = (predice) => (...args) => !predice(...args);
// --------------------------

const words = (str) =>
  String(str)
    .toLowerCase()
    .split(/\s|\b/)
    .filter((v) => /^[\w]+$/.test(v));

const unique = (list) => {
  return list.reduce((acc, cv) => {
    if (acc && acc.indexOf(cv) === -1) return [...acc, cv];
    return acc;
  }, []);
};

// --------------------------

const wordsFound = words(text);
const wordsUsed = unique(wordsFound);

console.log(wordsUsed);

// take care of args
const letters = compose2(unique, words);
const chars = letters("How are you Henry?");
printOutputCode(chars);

const letters3 = composes(unique, words);
const chars3 = letters3("How are you Henry?");
console.log("char3");
printOutputCode(chars3);
// const letters4 = composes(skipShortWords, unique, words);
// const chars4 = letters4(text);
// printOutputCode(chars4);

const letter5 = pipe(words, unique, skipShortWords);
const chars5 = letter5("how are you you you henry henry ?");
printOutputCode(chars5);

//------- abstraction
function storeData(store, location, value) {
  store[location] = value;
}

const saveComment = (txt) => {
  if (txt != "") {
    storeData(comments, comments.length, txt);
  }
};

function trackEvent(evt) {
  if (evt.name !== undefined) {
    storeData(events, evt.name, evt);
  }
}
//--- abstraction good approche

function conditionallyStoreData(store, location, value, checkFn) {
  if (checkFn(value, store, location)) sotre[location] = value;
}
const und = (x) => x === undefined;
const notEmpty = (x) => x != "";
const isPropUnd = (val, obj, prop) => und(obj[prop]);
const saveComment2 = (txt) => {
  storeData(comments, comments.length, txt, notEmpty);
};

// ----- Separation Enables Focus ----- //

// Composition as Abstraction
// imerative example
function shorterWords(text) {
  return wordsFilter(text, not(shortWord));
}

//declarative
const shortWordFromPredefinedFunc = partialRight(wordsFilter, not(shortWord));
const shorterWordsDec = composes(shortWordFromPredefinedFunc, unique, words);
const shorterWordsPipe = pipe(words, unique, shortWordFromPredefinedFunc);

printOutputCode(shorterWordsDec(text));
printOutputCode(shorterWordsPipe(text));

// --- Revisiting Points

const prop = (name, obj) => obj[name];

const extractName = partial(prop, "name");

const getPerson = () => ({ name: "abdelwahed" });

const outPutPerson = composes(extractName, getPerson);
printOutputCode(outPutPerson());
