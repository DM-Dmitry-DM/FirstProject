//section 1 INTRO

let js = 'amazing';
console.log(2+3+4+5-6*7);
console.log('Nathew');

let Name = 'Michael';
console.log(Name);
console.log(Name);
console.log(Name);

let person = 'Steve';
let PI = 3.14;
console.log(person, PI)


//section 2 Types
/*Comment
*/
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof 'string');
console.log(typeof 25);

let value;
console.log(typeof value);
console.log(typeof null);


//section 3 let var const
let a = 25;
const year = 2000; //never change
var b = 'SString' //not used nowdays


//section 4 Basic operators  --- also the same as python += -= ++ -- > < >= <=
const temp = 2005-1955;
console.log(temp*2, temp-5, temp/2);
let firstName = 'first';
let secondName = 'second';
console.log(firstName + " " + secondName + "5" * 5)
let tempp = 10 + 5;
tempp += 10;
tempp -= 12;
tempp++;
tempp--;
console.log(tempp);
console.log(tempp > 17);

//Challenge 1

let weightMark = 78;
let weightJohn = 92;

let tallMark = 1.69;
let tallJohn = 1.95;

let bmiMark = weightMark / tallMark ** 2
let bmiJohn = weightJohn / tallJohn ** 2

console.log(bmiMark, bmiJohn);
if (bmiJohn < bmiMark) {
  console.log(true, `BMI Mark is bigger than John ${bmiMark} > ${bmiJohn}`)
} else {
  console.log(false, `BMI Mark is lower than John ${bmiMark} < ${bmiJohn}`)
}

//section 4 concatanation template literals, like python, but _tab_(backticks)
const ffirstName = 'Jonas';
const jonasName =  `This is ${ffirstName}`;
console.log(jonasName);
console.log(`Banana
Strawberry
Cherry`)

//section 5 conditions same as python instead syntax
//if () {} else {}

//section 6
