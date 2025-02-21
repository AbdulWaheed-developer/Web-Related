console.log("How are you");
console.log("Learning JavaScript has started");
age=30;
Height=5.7;
x=null;
y=undefined;
pname="Abdul Waheed";
console.log(pname);

// Three types of variable scope and we use mostly "let" and "const"
// var=Variable can be re-declared & updated . A global scope variable.
// let=Variable can not be re-declared but can be updated . A block scope variable .
// const=Variable can not be re-declared or updated . A blcok scope variable.
// blocks are usually in curly brakets {}
var Uname="Abdul Waheed Jameel";
let Uage=29;
const Uprice=40000;
// e-g;(
// {
//     let a=5;
//     console.log(a);
// }
// data types in JavaSript 
// Primitive (Number , string , boolean , undefined , null ,bigInt ,Symbol) 
// Non-Primitive (objects: collection of values , syntax : key : value (arrays , functions))
// Non-Primitive object "student"
const student=
{
    FullName:"Abdul Majeed",
    PAge:33,
    CGPA:3.5,
    IsPass:true,
};
console.log(student);
// two method to access key values of objects
console.log(student.CGPA);
console.log(student["FullName"]);
// to change value of PAge
student.PAge=34;
console.log(student.PAge);
student["PAge"]=student["PAge"]+1;
console.log(student["PAge"]);

// operators : + , - , * , / , modulus(remaider % ) , Exponentiation(2 rais to power 3 = 2**3) , Increment(a++ / a=a+1) , Decrement 
console.log(2**3);
// assign operators (= , += , -= , *= , %= , **=) MEAN if a=a*b we can write shortcut as a *=b;
let a=6;
let b=5;
console.log(a *=b);

// comparison operators (equal equal to value == ,equeal equal to value and data type === ,not equal to != , !== ,> , < ,=< ,>=)
// Logical Operators : Logical AND && , Logical OR || , Logical NOT ! , if(score<100 && score>90)
let c=60;
let d=90;
console.log(a==b);
console.log(a!=b)

// conditional Statements 
// if(mode=="dark-mode")
if(c<d)
{
    console.log("First Number is less than 2nd Number")
}
let mode="light";
let color;
if(mode==="dark")
{
    color="black";
} else if(mode==="light")
{
    color="white";
} else{
    color="gray";
}
console.log(color); 
let value = 11;
if(value%2==0)
{
    console.log("Even");
} else{
    console.log("Odd");
}

// MDN DOCS , switches
let fruit="apple";
switch(fruit){
    case 'apple':
        console.log(fruit);
        break;
    case "mango" :
        console.log("fruit");
        break;
    case "bnana" :
        console.log(fruit);
        break;
}

// alert(only give message) ,  prompt(show message and get input also)
// alert("Please update your browser");
// let yourName=prompt("Your Name");
// let address=prompt("Where are you from");
// console.log(yourName,"You are from" , address , "right ?");
let num=prompt("Enter number multiple of 5");
if(num%5==0){
    console.log("You entered number : ", num);
}else{
    alert("Your number is not multiple of 5")
}

// Loops in JavaScript 
// for loop
for(let i=1;i<=5;i++){
    console.log("Done");
}
// while loop
let k=6;
while(k<12){
    console.log(k);
    k++;
}
// do while loop
let m=10;
do{
    console.log(m);
    m++;
}while(m<11);
// for-of-loop(Use for characterwise in string also can use in Arrays) 
let str="CMS Learners";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);
// for-in-loop(use for objects as it returns keys of object )
let animal={
    AnName: "Loin" ,
    AnAge:2,
    Diet : "meat",
};
for(let i in animal){
    console.log(i ," : ", animal[i]);
}
//Strings let str="kjlj" , str.length , console.log(str[0]);
let str2="Abdul Waheed";
console.log(str2.length);
console.log(str2[2]);
// Special type of string is "Template Literal" in which we not only store string but also data types as ${data variable} 
//this is called string interpolation and we use "bactics `d` and at start and at end
let specialstring3=`${animal.AnName} eat ${animal.Diet}`;
console.log(specialstring3);
console.log(typeof specialstring3);
// Next line \n , Next tab \t
console.log("This is\nTamplate of \ttab");
// Built in functions in string as convert string "toupperCase()" , "toLocaleLowerCase()" , "trim()"(remove White spaces 
//from starting and ending)(convert string on spot but not permanent value change) ,"slice(start, end)"(returns part of string) , 
//"string1.concat(string2)"(joins string2 with string1), "replace(searchValue,newVal)","charAt(idx)"(we search charactor through index to print)
console.log(specialstring3.toUpperCase())
console.log(specialstring3.toLocaleLowerCase());
console.log(specialstring3.trim());
console.log(specialstring3.slice(1,5));
console.log(specialstring3.concat(str2));
console.log(specialstring3.replace("e","E"));
console.log(specialstring3.charAt(3));
// Array : In JavaScript array is special type of object 
let marks=[90,56,80,39];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[2]);
// Looping over an array , iterations

for(let m=0;m<=marks.length;m++)
{
    console.log(marks[m]);
    
}

//other method Through For-Of-Loop when we declare new variable with naming convention then it express as
let plus=0;
for(let value of marks){
    console.log(value);
    plus=plus+value;
}
let avg = (plus/marks.length);
console.log(`Average :  ${avg}`);
// There are some build in functions in Arrays as : push() it add values in last of array ,change come in original array , 
// pop() it delete values from last, change come in original array , 
// toString() it converts values from array to string , don't change in original array , 
// concat() it joins two arrays and returns result , don't change in original array , 
// unshift() it add items in arrays in start
// shift() it delete items from start and return
// slice(start , end) returns a piece of array , it shows items less then end idex
// Splice(index,deletcount,add,add) change original array(add , remove , replace)
let fooditems=["apple","potato","litchi","tomato"];
fooditems.push("chips","burger","paneer"); // it add from start fooditems.unshift("bread")
console.log(fooditems);
let deleteditem=fooditems.pop(); // if from start then fooditems.unshift();
console.log(fooditems);
console.log("deleted item", deleteditem);
let newArray=fooditems.concat(marks);
// also can concatinate 3 or more as fooditems.concat(marks,cities)
console.log(newArray);
console.log(fooditems.slice(1,4)); 
marks.splice(2,1,96,76);
console.log(marks);
// Functions in JS 
