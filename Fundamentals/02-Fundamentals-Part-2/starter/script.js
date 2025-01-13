'use strict';


///////////////////////////////////////
// Activating Strict Mode


function  logger() {
  console.log('Hi');
}

logger() // calling the function  <<<---------

function testing (first, second) {
  console.log(first + ' ' + second);
  let temp = first + '+' + second;
  return temp;
}

console.log(testing('A', 'B'));
let qe;
qe = testing('A', 'B');
console.log(qe);
let ty = "test";
console.log(ty);

//Different types of function  <<<---------
let temp;
let temp2;
temp = 'function';
temp2 = 'test_word';


//Function declaration, can use this before function  <<<---------
let temp_decl = declaration(temp, temp2);
function declaration(temp, temp2) {
  let result = temp + ' ' + 'declaration' + ' ' + temp2;
  return result;
}


//Function expression, can use only after function  <<<---------
const expression = function (temp, temp2) {
  let result = temp + ' ' + 'expression' + ' ' + temp2;
  return result;
}
let temp_expr = expression(temp, temp2);


//Arrow function, primary use this type of function for single-string function
const arrow = (temp, temp2) => {
  let result = temp + ' ' + 'arrow' + ' ' + temp2;
  return result
}
let temp_arrow = arrow(temp, temp2);

console.log(temp_arrow, temp_expr, temp_decl);

//Challenge #1
const calcAverage = (temp1, temp2, temp3) => (temp1+temp2+temp3)/3;

let doplhins1 = 44;
let doplhins2 = 44;
let doplhins3 = 44;

let koalas1 = 44;
let koalas2 = 44;
let koalas3 = 44;

let dolphinsAverage = calcAverage(doplhins1, doplhins2, doplhins3);
let koalasAverage = calcAverage(koalas1, koalas2, koalas3);
console.log(dolphinsAverage, koalasAverage);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins === avgKoalas) {
    return 'draw'
  } else if (avgDolhins > avgKoalas) {
    return `Dolphins win ${avgDolhins} : ${avgKoalas}`
  } else if (avgDolhins < avgKoalas) {
    return `Koalas win ${avgKoalas} : ${avgDolhins}`
  }
}

console.log(checkWinner(dolphinsAverage, koalasAverage))

//arrays and objects  <<<---------
let arr = ['one', 'two', 'three', 'four'];
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length-1]);

//Add element  <<<---------
arr[0] = 'zero';
console.log(arr);

let newArr = ['one', 'two', 'three', 'four'];
newArr.push('five');
console.log(newArr);

let newLenght = newArr.push('six');
console.log(newArr);
console.log(newLenght);

newArr.unshift('seven', 'eight');
console.log(newArr);

//Remove element  <<<---------
newArr.pop();
newArr.pop();
console.log(newArr);

newArr.shift();
console.log(newArr);

//Indexes
console.log(newArr.indexOf('one'));
console.log(newArr.includes('gopa'));
console.log(newArr.includes('one'));

if (newArr.includes('two')) {
  console.log(`Yes it is`);
}

//Challenge

function calcTip (value) {
  let tip;
  if (value >= 50 && value <= 300) {
    tip = 0.15;
  } else {
    tip = 0.2;
  }
  console.log(`Value is ${value} tip is ${tip} amount of tip money is ${value * tip}`);
  return value * tip
}
calcTip(400);
let bills = [125, 555, 44];
let billsAnswer = [];

for (let i = 0; i < bills.length; i++) {
  let temp = calcTip(bills[i]);
  billsAnswer.push(temp);
}
console.log(billsAnswer);

//Objects
const firstObject = {
  name: 'Peter',
  money: 500,
  bool: true,
  func: function (temp) {
   // console.log(this);
    return temp + 100;
  }
}


console.log(firstObject);
console.log(firstObject.name);
console.log(firstObject['name']); // caN use operation, expression
firstObject.location = 'Hell'; //add new data
firstObject['age'] = 666; //add new data
console.log(firstObject);

console.log(firstObject.func(100));
console.log(firstObject['func'](200));

//Function inside objects,  <<<---------
const secondObject = {
  a: 20,
  b: 5,
  c: 3,
  bool: false,
  func2: function () {
    this.summ = this.a + this.b + this.c;
  },
  func3: function () {
    console.log(`A = ${this.a} B = ${this.b} c = ${this.c} SUMM = ${this.summ} bool is ${this.bool ? 'true' : 'false'}`);
  }
};

secondObject.func2()
secondObject.func3()

//Challenge 3
let Mark = {
  name: 'Mark Miller',
  weight: 78,
  tall: 1.69,
  BMI_func: function () {
    this.BMI = this.weight / this.tall ** 2
  }
}


let John = {
  name: 'John Smith',
  weight: 92,
  tall: 1.95,
  BMI_func: function () {
    this.BMI = this.weight / this.tall ** 2;
  }
}

Mark.BMI_func();
John.BMI_func();
if (Mark.BMI > John.BMI) {
  console.log(`BMI of ${Mark.name} who has ${Mark.BMI} is bigger than  ${John.name} who has ${John.BMI} `);
} else {
  console.log(`BMI of ${John.name} who has ${John.BMI} is bigger than  ${Mark.name} who has ${Mark.BMI} `);
}

//While example <<<---------
let tempValue =0;
while (tempValue <= 10) {
  console.log(tempValue);
  tempValue++;
}

//Looping  <<<---------
let tempArray = ['first', 2, 'test', [1, 'second']]
for (let i = 0; i < tempArray.length; i++) {
  console.log(typeof tempArray[i], tempArray[i]);
}
console.log();

//Reverse Looping  <<<---------
for (let i = tempArray.length-1; i >= 0; i--) {
  console.log(typeof tempArray[i], tempArray[i]);
}

//Break -- Continue
let tempArray2 = [1,2,3,'string',4,5,['first', 'second'], 6];
let tempArray3 = [];
for (let i = 0; i < tempArray2.length; i++) {
  console.log(tempArray2[i]);
  if (typeof tempArray2[i] === 'string') {
    continue; // next iteration
  } else if (typeof tempArray2[i] === 'object') {
    break; // stop the whole loop
  }
  tempArray3.push(tempArray2[i])
}
console.log(tempArray3);


//Challenge
let Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let total = [];
for (let i = 0; i < Bills.length; i++) {
  total.push(calcTip(Bills[i]));
}
console.log(total);

function calcAv (temp) {
  let sum = 0;
  for (let i = 0; i < temp.length; i++) {
    sum += temp[i];
  }
  return sum/temp.length
}
console.log(calcAv(Bills));

function print (temp) {
  console.log(temp);
}

print('tset')

//Final challenge
let Data_1 = [17, 21, 23];
let Data_2 = [12, 5, -5, 0, 4];

function printForecast (arr) {
  let sum = '';
  for (let i = 0; i < arr.length; i++) {
    sum += String(`${arr[i]}C in ${i+1} day...`) ;
  }
  return sum
}

let answer = printForecast(Data_2)
console.log(answer);


