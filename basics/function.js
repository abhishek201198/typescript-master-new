"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello";  
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// function getValue(myVal: number): {
//     if(myVal>5){
//         return true;
//     }
//     else{
//         return "200 OK"
//     }
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
var myValue = addTwo(5);
getUpper("abhishek");
signUpUser('abhishek', 'xyz@gmail.com', false);
loginUser('h', 'a@a.com');
