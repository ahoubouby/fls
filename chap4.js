const separator = "-------------------------------------------------";
const printOutputCode = (codeReturn) => {
  console.log(separator);
  console.log(codeReturn);
  console.log(separator);
};
//

const text =
  "To compose two functions together, pass the  output of the first function call as the input of the  second function call.";
// utility function
const compose2 = (fn2, fn1) => (orignValue) => fn2(fn1(orignValue));

const composes = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

//------ compose

const skipShortWords = (words) => words.filter((word) => word.length > 4);
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

const letters = compose2(words, unique);
const letters2 = compose2(unique, words);
const chars = letters("How are you Henry?");
const chars2 = letters2("How are you Henry?");
printOutputCode(chars);
printOutputCode(chars2);

const letters3 = composes(unique, words);
const chars3 = letters3("How are you Henry?");
console.log("char3");
printOutputCode(chars3);
const letters4 = composes(skipShortWords, unique, words);
const chars4 = letters4(text);
printOutputCode(chars4);
