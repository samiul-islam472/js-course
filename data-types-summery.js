// Primitive

// 7 types : String, Number, Boolean, Undefined, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


// Reference (Non primitive)

//  Array, Objects, Functions.
// Note: In order to master JavaScript you have to master 'Objects' and 'Web events or Browser enents'.

const heros = ["shaktiman", "doga", "nagarjun"]
let myObj = {
    name: "Samiul", 
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3
