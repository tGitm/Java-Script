console.log('hello');
//alert('yoo');
//to je komentar

//spremenljivke
var b = 'smoothie';
console.log(b);

document.getElementById('text').innerHTML = 'Hey there!'; 

//Manipulating DOM with JavaScript
//var age = prompt('Starost?');
//document.getElementById('text').innerHTML = age;

//numbers in js
var num1 = 5;
var num = 5.7;
num1 ++; //num-- decrement
console.log(num1);

//functions
function fun() {
    console.log('To je funkcija');
}
fun(); //klic funkcije

//funkcija ki prejme ime in izpiše hello in ime
function helloName() {
    var name = prompt('Your name?');
    var izpis = 'Hello ' + name + '!'; //String concatenation
    console.log(izpis);
}
//helloName();

//arguments in functions
//var yourName = prompt('Your name?');

function greeting(Name) {
    var izpis = 'Hello ' + Name + '!';
    console.log(izpis);
}
//greeting(yourName);

//adding 2 nums in function
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
//sumNumbers(10, 4);

//while loops
var num = 0;

while (num <= 100) {
    num++;
    console.log(num);
}

//for loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

//Data types
let age = 21; //number
let name = 'Tim'; //String
let Name = {first: 'Tim', last: 'Rus'}; //object
let truth = true; //boolean
let sports = ['freediving', 'shooting']; //array
let random; //undefined
let nothing = null; //null

//String in JS
let fruit = 'banana,orange,blackberry';
let moreFruits = 'banana\napple';
console.log(fruit.length);
console.log(fruit.indexOf('an')); //če neki ne obstaja vrne -1
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(1));
console.log(fruit[1]);
console.log(fruit.split(',')); //returns array

//Arrays
//deklaracija na 2 načina
let fruits = ['banana', 'orange', 'pineapples', 'apple'];
ruits = new Array('banana', 'orange', 'pineapples', 'apple');

//alert(fruits[1]);
fruits[0] = 'peach';
console.log(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop()); //odstrani zadnji element
console.log(fruits.push('blackberries'));
fruits.shift(); //remove first element from list
fruits.unshift('kiwi'); //add first element kiwi
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); //alphabeticly sorted

let someNums =  [5, 10 ,2, 25, 4, 12, 67, 100, 0, 18];
console.log(someNums.sort(function (a, b) {return a-b}));

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
    
}
console.log(emptyArray);

//objects in JS, dicts in PY
let student = {
    first: 'Tim', 
    last: 'Rus',
    age: 20, 
    height: 191,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first); 
//console.log(student.last); 
//student.first = 'notTim'; //changing value
//console.log(student.first); 
student.age++;
console.log(student.studentInfo());

//conditionals
let ageA = 20;

if ((ageA >= 18) && (ageA <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

//switch
switch (2) {
    case 0: 
        text = 'weekend'; 
        break;
    case 5: 
        test = 'weekend';
        break;
    case 6: 
        text = 'weekend';
        break;
    default: text = 'weekday';
}
console.log(text);