//Question 1
function que1(){
	var a = 7;
	var b = 5;

	alert("Sum of "+a+ "and "+b+" is: "+(a+b));
	alert("Product of "+a+ "and "+b+" is: "+(a*b));
	alert(a+ " % "+b+" is: "+(a%b));
}

// Question 2
function sum2(){
	var a = 8;
	var b = 3;

	alert("Sum of "+a+ " and "+b+" is: "+(a+b));
}
function mul2(){
	var a = 8;
	var b = 3;

	alert("Product of "+a+ " and "+b+" is: "+(a*b));
}
function mod2(){
	var a = 8;
	var b = 3;

	alert(a+ " % "+b+" is: "+(a%b));
}

//Question 3
function sum3(){
	var a = 8;
	var b = 3;
	return a+b;
}
function mul3(){
	var a = 8;
	var b = 3;
	return a*b;
}
function mod3(){
	var a = 8;
	var b = 3;
	return a%b;
}

//Question 4
var y =6;
function local_var(){
	var x = 5;
	alert("This var "+x+" is declared withing the scope so its is a local variable!");
	alert("This var "+y+" is declared outside the scope so its is a global variable!");
}

//Question 5
var a=5;
var b=6;
function que5(){
	var x = 7;
	var y = 4;

	console.log("*****Localy declared variables x and y*****");
	console.log("Sum of "+x+" and "+y+" is: "+(x+y));
	console.log("Product of "+x+" and "+y+" is: "+(x*y));
	console.log(x+" % "+y+" is: "+(x%y));

	console.log("*****Globaly declared variables x and y*****");
	console.log("Sum of "+a+" and "+b+" is: "+(a+b));
	console.log("Product of "+a+" and "+b+" is: "+(a+b));
	console.log(a+" % "+b+" is: "+(a%b));
}

//Question 6
function addition(){
	var a = 6;
	var b = 7;
	var c = a+b;
	console.log("****This is Addition operator****");
	console.log(a+" + "+b+" = "+c);
}
function subst(){
	var a = 6;
	var b = 7;
	var c = a-b;
	console.log("****This is Substraction operator****");
	console.log(a+" - "+b+" = "+c);
}
function multi(){
	var a = 6;
	var b = 7;
	var c = a*b;
	console.log("****This is Multiplication operator****");
	console.log(a+" * "+b+" = "+c);
}
function divide(){
	var a = 6;
	var b = 7;
	var c = a/b;
	console.log("****This is Division operator****");
	console.log(a+" / "+b+" = "+c);
}
function mod(){
	var a = 7;
	var b = 6;
	var c = a%b;
	console.log("****This is Modulus operator****");
	console.log(a+" % "+b+" = "+c);
}

//Question 7
var a = 7;
var b = 8;
function add(){
	a+=1;
	var sum = a + b;
	console.log("Addition of "+a+" and "+b+" is: "+sum);
}
function sub(){
	a-=1;
	var minus = a - b;
	alert("Substraction of "+a+" and "+b+" is: "+minus);
}
function multiply(){
	var a = 10;
	var sum = a+b;
	var subtract = a-b;
	var divide = a/b;
	var multiply = a*b;
	var modulus = a%b;

	console.log(a+" + "+b+" = "+sum);
	console.log(a+" - "+b+" = "+subtract);
	console.log(a+" / "+b+" = "+divide);
	console.log(a+" * "+b+" = "+multiply);
	console.log(a+" % "+b+" = "+modulus);
}


//Question 8
function fahr(){
	var f =prompt("Enter Fahrenheit value to convert into Celsius!");

	var c = (f-32)*5/9;
	alert(f+" Fahrenheit to Celsius is: "+c);
}

//Question 9
function que9(n,p){
	
	alert("The name is set as: "+n);
	alert("Name is displayed as: "+p);
}
