let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // type conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);  // type conversion
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "Samiul" => true

let someNumber = 33;
let stringNumber = String(someNumber); // type conversion
console.log(stringNumber);
console.log(typeof stringNumber);
