console.log('External');

document.write('Sudhagar Subramaniyam');

document.write("  <br><br>  <label > My Name </label> <input type='text'> <br><button class ='a' >Submit</button>")

// Number
const num = 10.5;

// String

const strin = "Sudha 2.0";

//Boolean
const bool = false;

//Object
const obj = {name: 'sudha',address: 'wattala'}

//array

// const array = [a,b,c,{},100,[]]

//let

let a=10
console.log(a);
{let a =100;
    console.log('block',a);
}

a=50;
console.log(a);
//console.log(ab); // can t call out of the range

//let a =20 cant redeclare 

//VAR
var v =10;
var v = true;
console.log(v);
{var v = 888}
console.log(v);
v='sudha'
console.log(v);

var b,c;
b =10
c= 20
console.log('cal',b+c);


//const
const co = 10;
// const co =20; Cant redeclare
//co = 20; cant reassigne
{ // console.log(co); cant call inside the bolck
    const co = 30;
    console.log(co); // only can use inside the block
}
console.log(co);    


//Arithmetic Operatores--------------------------------------------------------------
//Addition(+)
const s = 20;
const e = 10;
const add = s + e ;
console.log(add);

// substraction (-)
const sub = s - e;
console.log(sub);

//Multiplication
const mult = s * e;
console.log(mult);

//division(/)

const div = s / e ;
console.log(div);

//Moduls(%)

const mo = s%e;
console.log(mo);

//Increment
let h = 10;
h++
h++
console.log(h);

// Decrement
let i = 20;
i--
i--
console.log(i);

// Comparison operatores-------------------------------------------------
//(==)
const l = '10';
const m = 10;

console.log(l==m); true
//(===)
console.log(l===m); false

//Not Equal(==) / (===)
console.log(l !== m);

// Greater than(>)
console.log(l > m)

//less than(<)
console.log(l<m);

// Greater than or Equal to (>=)
console.log(l >= m);

//Less than Equal to (<=)
console.log(l <= m);

// Logical Operators----------------------------------
const y = false;
const x = false;

// AND (&&)
console.log(y && x);

// Or (||)
console.log(y || x);

//Not (!)
console.log(!y);

// Flow Controllers
// IF

const stu1 = 100;
const stu2 = 200;
//IF else
if(stu1 > 200){
    console.log('Student 1 Passed..!')
}else{
    console.log("Student 1 Fail...!")
}

//IF elseIf
if (stu1 > 200) {
  console.log("Student 1 Passed..! A ");
} else if (stu1 > 150) {
  console.log("Student 1 Passed..! B ");
} else if (stu1 > 100) {
  console.log("Student 1 Passed..! C ");
} else {
  console.log("Student 1 Fail...!");
}

// Nested If

if (stu1 > 200) {
    if(stu1 >250 && stu1 < 300){
        console.log("A.1");
    }else{
        console.log("A.2");
    }
  } else if (stu1 > 150) {
    console.log("Student 1 Passed..! B ");
  } else if (stu1 > 100) {
    console.log("Student 1 Passed..! C ");
  } else {
    console.log("Student 1 Fail...!");
  }

// Switch
const val = 'AFSD1'
switch (val) {
    case "ACPT":
        console.log("Pint ACPT");
        break;
    case "AFSD":
        console.log("Pint AFSD");
        break;
    default:
        console.log("Pint Non");
        break;
}

// Array

const array1 = [1,'ACPT',true,{name: 'Chamikara'},[]];
console.log(array1[10]);

const fruits = ["Banana","Mango","Apple","Orange"];

//POP --------- Remove the last index
const fruit = fruits.pop();
console.log(fruit);
console.log(fruits);

//
//Push ------------- add to the last index
fruits.push("Kiwi");
console.log(fruits);

//shift
// const fruit = fruits.shift();
console.log(fruit);
console.log(fruits);

//Unshift
// fruits.unshift("Kiwi");
// console.log(fruits);

//Loops
// For Loop

const arr = [23,44,56,78,334,677,45654,788787];

for(let w=0; w< arr.length; w++){
    console.log(arr[w]);
}

//break
for(let w=0; w< arr.length; w++){
    if(arr[w] == 101){
        break;
    }
    console.log(arr[w]);
}

// While
let st =0;
while(st < arr.length){
  console.log(arr[st]);
  st++
};

// do while
let stu = 0;
do{
  stu++
  console.log(arr[stu]);
}while(stu < arr.length)

// Array loop

// arr.forEach() = >{
// }
// Map
// filter


// Object
let car = {
  color: 'red',
  brand: 'bmw',
  seets: 4,
  drive: function(){
    console.log("Drive");
  }
}

// Function

// Name Function
function PrintName(){
  console.log("My Name is Chamikara..");
}
PrintName();

// Anonymuse Function
let fun = function(){
  console.log('Print Fun')
}

fun();
// Arrow Function
const student = () =>{
  console.log('Print arrow')
}
student();

//function with parameter
// function EqualNumber(num1,num2){
//   let total = num1 + num2;
//   console.log(total);
// }

// EqualNumber(10,20);
// EqualNumber(112,334);

//Function return
// function EqualNumber(num1,num2){
//   let total = num1 + num2;
//   return total
// }

// console.log(EqualNumber(112,334));

//Arrow Function return

// const EqualNumber = (num1,num2) => num1 + num2;
// console.log(EqualNumber(20,50));

// Task

const result = (name,markd) => {
    if(markd < 35){
      return name+' is Fail'
    }
    else{
      return name+' is pass'
    }
};

console.log(result('sudha',34));
console.log(result('Prasanna',35));

//Events

//onclick
const showAlet =() => {
  alert("Cicked me");
};

//onchange
const onChanage = () =>{
  console.log('Onchange event');
  const value = document.getElementById('inputChange').value;
  console.log(value);
}

//onMouseover
function mouseOver(){
  console.log('call mouse over');
  document.getElementById('mouse').style.backgroundColor = 'blue';

}

//onMouseOut
function mouseOut(){
  console.log('call mouse out');
 document.getElementById('mouse').style.backgroundColor = 'red';
}

// Event Key
//Key up
function onKeyUP(){
  console.log("Key up");
  const res = document.getElementById('key').value;
  console.log(res);
  document.getElementById('display').innerHTML = res;

}
//Key down
function onKeyDown(){

}
//Key press
function onKeyPress(){

}

function tonMouseEnter(){
  console.log("mouse entered");
  document.getElementById('task').style.backgroundImage = 'url(./img2.png)';
}

function onMouseLeave(){
  console.log("mouse Leave");
  document.getElementById('task').style.backgroundImage = 'url(./img1.png)';
}

//Regex

function changeText(){
  const text = document.getElementById('validation').value;
  const reg = /^(0|[1-9]\d*)$/;
  
  if(reg.test(text)){
    console.log("Success.....")
    document.getElementById('error').innerText = "Valid Number"
    document.getElementById('error').style.color = 'Green'
  }
  else{
    console.log("filed.....")
    document.getElementById('error').innerText = "Error"
    document.getElementById('error').style.color = 'Red'
  }
}
