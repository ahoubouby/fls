//Chapter 5: Reducing Side Effects
const updateCounter = (obj) => {
  if (obj.count < 10) {
    obj.count++;
    return true;
  }
  return false;
};

function currency(val) {
  var num = parseFloat(String(val).replace(/[^\d.-]+/g, ""));
  var sign = num < 0 ? "-" : "";
  return `${sign}$${Math.abs(num).toFixed(3)}`;
}

console.log(currency(-3.1));
console.log(currency(currency(-3.1)));
//-- pure funciton

const sum = (items) => items.reduce((acc, cv) => acc + cv, 0);
const unary = (fn) => (arg) => fn(arg);
const table = [1, 2, 4, 7, 11, 16, 22];
console.log(sum(table) / table.length);

//Purely Relative
