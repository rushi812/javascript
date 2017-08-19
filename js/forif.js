//Question 1
function que1(){
	console.log("****Print numbers from 1 to 10****");
	for(var i=1;i<=10;i++)
	{
		console.log(i);
	}
}

//Question-2
function que2(){
	console.log("****Print numbers from 10 to 1****");
	for(var i=10;i>0;i--)
	{	
		console.log(i);
	}
}

//Question-3
function que3(){
	console.log("****Print odd numbers from 1 to 50****");
	for(var i=1;i<=50;i++)
	{
		if(i%2==1)
		{
			console.log(i);
		}
	}
}

//Question-4
function que4(){
	console.log("****Print even numbers from 1 to 100****");
	for(var i=1;i<=100;i++)
	{
		if(i%2==0)
		{
			console.log(i);
		}
	}
}

//Question-5
function que5(){
	console.log("****Numbers to be printed between 40 to 60****");
	for(var i=40;i<=60;i++)
	{
			console.log(i);
	}
}

//Question-6
function que6(){
	console.log("****Numbers printed between 80 to 100****");
	for(var i=80;i<=100;i++)
	{
			console.log(i);
	}	
}

//Question-7
function que7(){
	var num = prompt("Enter a number and see magic :P");

	num = parseInt(num);
	if(num>=1 && num<=5)
	{
		for(var i=0;i<=10;i++)
		{
			var n = 0;
			n = num+i;
			console.log(n);
		}
	}
	else
	{
		alert("Please enter a valid number between 1 and 5!");
	}

	// if(num == 1)
	// {
	// 	console.log("Number between 1 to 11");
	// 	for(var i=1;i<=11;i++)
	// 	{
	// 		console.log(i);
	// 	}
	// }
	// else if(num == 2)
	// {
	// 	console.log("Number between 2 to 12");
	// 	for(var i=2;i<=12;i++)
	// 	{
	// 		console.log(i);
	// 	}
	// }
	// else if(num == 3)
	// {
	// 	console.log("Number between 3 to 13");
	// 	for(var i=3;i<=13;i++)
	// 	{
	// 		console.log(i);
	// 	}
	// }
	// else if(num == 4)
	// {
	// 	console.log("Number between 4 to 14");
	// 	for(var i=4;i<=14;i++)
	// 	{
	// 		console.log(i);
	// 	}
	// }
	// else if(num == 5)
	// {
	// 	console.log("Number between 5 to 15");
	// 	for(var i=5;i<=15;i++)
	// 	{
	// 		console.log(i);
	// 	}
	// }
		  
}

//Question-8
function que8(){
	var num = prompt("Enter between 123 to 127");

	switch(num)
	{
		case "123":
			alert("One Two Three");
			break;
		case "124":
			alert("One Two Four");
			break;
		case "125":
			alert("One Two Five");
			break;
		case "126":
			alert("One Two Six");
			break;
		case "127":
			alert("One Two Seven");
			break;
	}
}

//Question-9
function que9(){
	var num = prompt("Enter number from 1 to 5");

	switch(num)
	{
		case "1":
			alert("One");
			break;
		case "2":
			alert("Two");
			break;
		case "3":
			alert("Three");
			break;
		case "4":
			alert("Four");
			break;
		case "5":
			alert("Five");
			break;
	}

}

//Question-10
function que10(){
	var num = prompt("Enter number between 1 to 50");

	if(num>=1 && num<=10)
	{
		alert("The number is between '1 and 10'");
	}
	else if(num>=11 && num<=20)
	{
		alert("The number is between '11 and 20'");
	}
	else if(num>=21 && num<=30)
	{
		alert("The number is between '21 and 30'");
	}
	else if(num>=31 && num<=40)
	{
		alert("The number is between '31 and 40'");
	}
	else if(num>=41 && num<=50)
	{
		alert("The number is between '41 and 50'");
	}
	else
	{
		alert("Enter a valid number");
	}
}

//Question-11
function que11(){
	var num = prompt("Enter a number!");

	if(num<50 || num>200)
	{
		alert("The number is a valid number");
	}
	else if(num>=50 && num<=200)
	{
		alert("The number is a Good number");
	}
	else
	{
		alert("It is an invalid number");
	}
}

//Question-12
function que12(){
	var text = prompt("Enter any number from 1 to 5 in words");

	if(text === "One")
	{
		alert("1");
	}
	else if(text === "Two")
	{
		alert("2");
	}
	else if(text === "Three")
	{
		alert("3");
	}
	else if(text === "Four")
	{
		alert("4");
	}
	else if(text === "Five")
	{
		alert("5");
	}
	else
	{
		alert("Enter valid number from 1 to 5");
	}
}

//Question-13
function que13(){
	var text = prompt("Enter a number");

	if(text === "Six")
	{
		alert("Please enter a proper number");
	}
	else if(text === "Seven")
	{
		alert("Please enter a proper number");
	}
	else if(text === "Eight")
	{
		alert("Please enter a proper number");
	}
	else if(text === "Nine")
	{
		alert("Please enter a proper number");
	}
	else if(text === "Ten")
	{
		alert("Please enter a proper number");
	}
	else
	{
		alert("Please enter a valid number");
	}	
}


//Question-14
function que14(){
	var num = prompt("Enter a number");

	if(num%2==0)
	{	
		num=parseInt(num);
		console.log(num+" is an even number.");
		console.log("Next 10 even numbers after "+num+" are:");
		for(var i=+1;i<=10;i++)
		{
			num+=2;
			console.log(num);
		}
	}
	else if(num%2==1)
	{
		num=parseInt(num);
		console.log(num+" is an odd number.");
		console.log("Next 10 odd numbers after "+num+" are:");
		for(var i=1;i<=10;i++)
		{
			num+=2;
			console.log(num);
		}
	}
}

//Question-15
function que15(){
	var num = prompt("Enter a number");

	if(num%2==0)
	{	
		num=parseInt(num);
		console.log(num+" is an even number.");
		console.log("Previous 5 even numbers before "+num+" are:");
		for(var i=+1;i<=5;i++)
		{
			num-=2;
			console.log(num);
		}
	}
	else if(num%2==1)
	{
		num=parseInt(num);
		console.log(num+" is an odd number.");
		console.log("Previous 5 odd numbers before "+num+" are:");
		for(var i=1;i<=5;i++)
		{
			num-=2;
			console.log(num);
		}
	}
}