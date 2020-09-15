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

const text =
  "To compose two functions together, pass the  output of the first function call as the input of the  second function call.";
const wordsFound = words(text);
const wordsUsed = unique(wordsFound);
console.log(wordsUsed);
