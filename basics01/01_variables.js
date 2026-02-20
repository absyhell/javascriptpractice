/*
let a=20
const x="ayush@google.com"
var y="99"
console.log(a);
console.log(x)
console.log(y)
a=99
// x=69
y=0
console.table({a,x,y})
//dont use var
//since var scope wala fundamental ke khilaaf hai
*/
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])