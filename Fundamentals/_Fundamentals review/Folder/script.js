// ***Fundamentals JavaScript*** \\

// 1.) How to create variable

console.log('1.) How to create variable')
let emptyValue
const a = 'variable' // string
const b = 25 // number
const c = [1, 2, 3, 'string'] // list-array
const d = {
  firstTemp: 'name',
  secondTemp: 'string',
  thirdTemp: [1, 2, 3],
} // dictionary-object
const e = 'SString' // not used nowdays
const PI = 3.14 // italics for constants
console.log(emptyValue, a, b, c, d, e, PI)

// 2.) Concatanation template literals, like python, but _tab_(backticks)
console.log('2.) Concatanation template literals, like python, but _tab_(backticks)')
const firstName = 'Jonas'
const jonasName = `This is ${firstName}` // How to use ${} construction inside strings
console.log(`Banana
Strawberry
Cherry`)

// 3.) Coercin conversion
console.log('3.) Coercin conversion')
const inputYear = '1991'
console.log(inputYear + 18)
console.log(inputYear - 18)
console.log(Number(inputYear) + 18)
console.log(typeof 'John') // NaN not a number
// "-" => Number, Math minus ; + => String, Concatanation
// false values are: '' null  NaN 0
const q = 4
const w = '4'
console.log(q == w, q === w) // Strict and not strict

// 4.)section 5 conditions same as python instead syntax, WHILE BREAK CONTINUE, FOR
// if () {} else if () {} else {}
// While () {}
// For (let i; i<num; i++) {}

let tempValue =0
while (tempValue <= 10) {
  console.log(tempValue)
  tempValue++
}

// Break -- Continue -- If Else
const tempArray2 = [1, 2, 3, 'string', 4, 5, ['first', 'second'], 6]
const tempArray3 = []
for (let i = 0; i < tempArray2.length; i++) {
  console.log(tempArray2[i])
  if (typeof tempArray2[i] === 'string') {
    continue // next iteration
  } else if (typeof tempArray2[i] === 'object') {
    break // stop the whole loop
  }
  tempArray3.push(tempArray2[i])
}
console.log(tempArray3)
console.
// 5.) Logic operators
console.log('5.) Logic operators')
// ----- && = and
// ----- || = or
//   === Strict, == Not strict  !==, !=, >=, <=
const day = 'week'
switch (day) {
  case 'tuesday':
    console.log('wrong')
    break
  case 'monday':
    console.log('correct')
    break
  case 'day':
  case 'week':
    console.log('little trick here')
    break
  default:
    console.log('Default value')
}

// 6.) Ternary operator
// condition ? expression1 : expression2

console.log('6.) Ternary operator')
const age = 5
age >= 18 ? console.log('Over 18') : console.log('Less than 18')
const drink = age > 18? 'Yes' : 'No'
console.log(drink)
console.log(`Alternate answer ${age > 18? 'Yes' : 'No'}`)

// 7.) Functions

console.log('7.) Functions')
let temp
let temp2
temp = 'function'
temp2 = 'test_word'

// Function declaration, can use this before function  <<<---------
const temp_decl = declaration(temp, temp2)
function declaration(temp, temp2) {
  const result = `${temp } ` + 'declaration' + ` ${ temp2}`
  return result
}

// Function expression, can use only after function  <<<---------
const expression = function (temp, temp2) {
  const result = `${temp } ` + 'expression' + ` ${ temp2}`
  return result
}
const temp_expr = expression(temp, temp2)

// Arrow function, primary use this type of function for single-string function
const arrow = (temp, temp2) => {
  const result = `${temp } ` + 'arrow' + ` ${ temp2}`
  return result
}
const temp_arrow = arrow(temp, temp2)

console.log(temp_arrow, temp_expr, temp_decl)

// 8.) Arrays

console.log('8.) Arrays')

const arr = ['one', 'two', 'three', 'four']
// Methods
console.log(arr.length)

// Add element  <<<---------
arr[0] = 'zero'
arr.push('five')
arr.unshift('seven', 'eight')

// Remove element  <<<---------
arr.pop()
arr.shift()

// Indexes
console.log(arr.indexOf('one'))
console.log(arr.includes('gopa'))

// 9.) Objects
const firstObject = {
  name: 'Peter',
  money: 500,
  bool: true,
  func(temp) {
    // console.log(this);
    return temp + 100
  },
}

console.log(firstObject.name) // caN use operation, expression
firstObject.location = 'Hell' // add new data
firstObject.age = 666 // add new data
console.log(firstObject.func(100))
console.log(firstObject.func(200))

// Function inside objects,  <<<---------
const secondObject = {
  a: 20,
  b: 5,
  c: 3,
  bool: false,
  func2() {
    this.summ = this.a + this.b + this.c
  },
  func3() {
    console.log(`A = ${this.a} B = ${this.b} c = ${this.c} SUMM = ${this.summ} bool is ${this.bool ? 'true' : 'false'}`)
  },
}

secondObject.func2()
secondObject.func3()
