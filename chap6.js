// "use strict";
/**
 * utilitie functions
 */
const log = (v) => console.log(v);
// string immut
var s = "hello";
log(s[1]);
s[1] = "E";
s.length = 10;
log(s);

//Value to Value
// the copy-instead-of-mutate strategy

function updateLastLogin(user) {
  var newUserRecord = Object.assign({}, user);
  newUserRecord.lastLogin = Date.now();
  return newUserRecord;
}

//Non-Local
// var arr = [1, 2, 3];
// foo(arr);
// foo([...arr]); // ha! a copy!
// console.log(arr[0]);

// console.log(arr[0]);
//Reassignment

var a = "420"; // later
a = Number(a); // later
log(a);
a = [a];
log(a);
