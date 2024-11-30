
//Task 1

var a = 10;
var b = 5;

var addition = a+b;
var subtraction = a-b;
var multiplication = a*b;
var division = a/b;

console.log('addition :' + addition);
console.log('subtraction :' + subtraction);
console.log('multiplication :' + multiplication);
console.log('division :' + division);


// Task 2

var celsius = 120;

var fahrenheit =  (celsius * 9/5) + 32;

console.log ("Equivalent of 120 celcius is : " + fahrenheit+'F');


//Task 3

var num = prompt('Enter a number: ');

if (num < 0){
    console.log('Your given number is Negative');
}
else if (num>0){
    console.log("Your given number is Positive");
}

else{
    console.log('The number is zero');
}

//Task 4

var marks = prompt("Enter your mark : ");

if (marks >= 90){
    console.log("A");
}
else if(marks>=80 && marks<=89){
    console.log("B");
}
else if(marks>=70 && marks<=79){
    console.log("C");
}
else if(marks>=60 && marks<=69){
    console.log("D");
}
else if(marks<=60){
    console.log("F");
}
   
//Task 5

var num = prompt('Enter a number: ');

if (num %2 === 0){
    console.log('Even');
}
else{
    console.log('Odd');
}
