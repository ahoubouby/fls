const separator = "-------------------------------------------------";
const printOutputCode = (codeReturn) => {
  console.log(separator);
  console.log(codeReturn);
  console.log(separator);
};

// utility function
const compose2 = (fn2, fn1) => (orignValue) => fn2(fn1(orignValue));

// --------------------------

const words = (str) =>
  String(str)
    .toLowerCase()
    .split(/\s|\b/)
    .filter((v) => /^[\w]+$/.test(v));

function unique(list) {
  var uniqList = [];
  for (let v of list) {
    // value not yet in the new list?
    if (uniqList.indexOf(v) === -1) {
      uniqList.push(v);
    }
  }
  return uniqList;
}

const unique2 = (list) => {
  return list.reduce((acc, cv) => {
    if (acc && acc.indexOf(cv) === -1) return [...acc, cv];
    return acc;
  }, []);
};

const text =
  "To compose two functions together, pass the  output of the first function call as the input of the  second function call.";
const wordsFound = words(text);
const wordsUsed = unique(wordsFound);
const wordsUsed2 = unique2(wordsFound);
console.log(wordsUsed);
printOutputCode(wordsUsed2);
