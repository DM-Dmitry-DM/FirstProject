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

//section 6 coercin conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(typeof "John"); //NaN not a number
// minus => Number ; + => string
// false values are: '' null und NaN 0
let q = 4 ;
let w = '4';
console.log(q == w, q === w)
const prmt = prompt('What is going on?')
console.log(prmt)

//section 7 Logic operators
// && = and
// || = or
const day = "day";
switch (day) {
  case 'tuesday':
    console.log('wrong');
    break;
  case "monday":
    console.log('correct');
    break;
  case "day":
  case "week":
    console.log('little trick here');
    break;
  default:
    console.log(`Default value`)
}
//  if() {}
//  else if () {}  ---> alternative of case

//challenge
let DolphinsScore1 = 79;
let DolphinsScore2 = 178;
let DolphinsScore3 = 78;
let KoalasScore1 = 180;
let KoalasScore2 = 78;
let KoalasScore3 = 78;

let DolphinsPoints = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3)/3
let KoalasPoints = (KoalasScore1 + KoalasScore2 + KoalasScore3)/3

console.log(`DolphinsPoints -- ${DolphinsPoints}
KoalasPoints -- ${KoalasPoints}`)

let winer;
if (DolphinsPoints > KoalasPoints && (KoalasPoints <100 || DolphinsPoints < 100)) {
  winer = 'Dolphins';
  console.log(`Winer is ${winer}`)
} else if (KoalasPoints > DolphinsPoints && (KoalasPoints <100 || DolphinsPoints < 100)) {
  winer = 'Koalas';
  console.log(`Winer is ${winer}`)
} else if (KoalasPoints === DolphinsPoints) {
  winer = 'DRAW';
  console.log(`Winer is ${winer}`)
} else if (KoalasPoints === DolphinsPoints || (KoalasPoints > 100 && DolphinsPoints > 100)) {
  winer = 'DRAW > 100';
  console.log(`Winer is ${winer}`)
} else {
  console.log(`Wrong conditions`)
}

//section 8
const age = 5;
age >= 18 ? console.log(`Over 18`) : console.log(`Less than 18`);

const drink = age > 18? "Yes" : "No";
console.log(drink);
console.log(`Alternate answer ${age > 18? "Yes" : "No"}`)

//last challenge
let tip;
let money = 410;
money >= 50 && money <= 300 ? tip = 0.2 : tip = 0.15;
console.log(`tip are ${tip*100}% is equal ${money*tip} money are ${money}`);
