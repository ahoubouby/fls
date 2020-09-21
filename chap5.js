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

//containing Effects

var users = {};
function fetchUserData(userId) {
  ajax(`http://some.api/user/${userId}`, (user) => {
    users[userId] = user;
  });
}
// Covering Up Effects

var nums = [];
var smallCount = 0;
var largeCount = 0;
function generateMoreRandoms(count) {
  for (let i = 0; i < count; i++) {
    let num = Math.random();
    if (num >= 0.5) {
      largeCount++;
    } else {
      smallCount++;
    }
    nums.push(num);
  }
}
generateMoreRandoms(4);
console.log(nums);

//The brute-force strategy
// 1. Capture the to-be-affected current states
// 2. Set initial input states
// 3. Run the impure function
// 4. Capture the side effect states
// 5. Restore the original states
// 6. Return the captured side effect states
function safer_generateMoreRandoms(count, initial) {
  // (1) Save original state
  var orig = {
    nums,
    smallCount,
    largeCount,
  };
  // (2) Set up initial pre-side effects state
  nums = [...initial.nums];
  smallCount = initial.smallCount;
  largeCount = initial.largeCount;
  // (3) Beware impurity!
  generateMoreRandoms(count);
  // (4) Capture side effect state
  var sides = { nums, smallCount, largeCount };
  // (5) Restore original state
  nums = orig.nums;
  smallCount = orig.smallCount;
  largeCount = orig.largeCount;
  // (6) Expose side effect state directly as output
  return sides;
}
var initialStates = { nums: [0.3, 0.4, 0.5], smallCount: 2, largeCount: 1 };
const result = safer_generateMoreRandoms(4, initialStates);
console.log(result);
console.log(initialStates);

// Evading Effects

function handleInactiveUsers(userList, dateCutoff) {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].lastLogin == null) {
      // remove the user from the list
      userList.splice(i, 1);
      i--;
    } else if (userList[i].lastLogin < dateCutoff) {
      userList[i].inactive = true;
    }
  }
}

function safer_handleInactiveUsers(userList, dateCutoff) {
  const copiedUserList = userList.map((user) => Object.assign({}, user));
  handleInactiveUsers(copiedUserList, dateCutoff);
  return copiedUserList;
}
