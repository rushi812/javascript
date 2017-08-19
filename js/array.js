//Question 1
var quotes =[
		"'Don't cry because it's over, smile because it happened.'",
		"'Be yourself; everyone else is already taken.'",
		"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
		"'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.'",
		"'A room without books is like a body without a soul.'",
		"'You only live once, but if you do it right, once is enough.'",
		"'Be the change that you wish to see in the world.'",
		"'In three words I can sum up everything I've learned about life: it goes on.'",
		"'Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
		"'No one can make you feel inferior without your consent.'"
	];
function displayQuotes(){
	
	console.log("****QUOTES****");
	counter = 1;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter++;
	}
}
//Question 2
function que2(param){
	var param = quotes;
	alert("Length of array is: "+param.length);
	console.log("Length of array is: "+param.length);
	counter = 4;

	for(var i=3;i<param.length;i++)
	{
		console.log("Quote "+counter+": "+param[i]);
		counter++;
	}
} 

//Question 3
function que3(){
	displayQuotes();
	console.log("****Performing 'pop()' method on above generated ARRAY****");
	
	quotes.pop();
	console.log("Now length of Array is:"+quotes.length);	
	console.log("****POPED ARRAY****");
	counter = 1;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter++;
	}

	console.log("****Performing 'reverse()' method on above generated ARRAY****");
	quotes.reverse();
	console.log("****REVERSED ARRAY****");
	counter = quotes.length;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter--;
	}
	console.log("****8th array element****");
	console.log("Quote : "+quotes[7]);

	console.log("****Performing 'shift()' method on above generated ARRAY****");
	quotes.shift();
	console.log("Now length of Array is:"+quotes.length);
	console.log("****SHIFTED ARRAY****");
	counter = quotes.length;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter--;
	}

	console.log("****Performing 'sort()' method on above generated ARRAY****");
	quotes.sort();
	console.log("****SORTED ARRAY****");
	counter = 1;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter++;
	}
}


//Question 4
function que4(){
	var arr = prompt("Enter few numbers with space between them!"); 
	var res = arr.split(" ");
	console.log("Array is: ["+res+"]");
	console.log("Length of Array is: "+res.length);
	
	console.log('Performing push("12") method on array');
	res.push("12");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing unshift("r") method on array');
	res.unshift("r");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing splice(4,0,"a","b") method on array');
	res.splice(4,0,"a","b");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);	

	console.log('Performing slice(3,6) method on array');
	var sl = res.slice(3,6);
	console.log("Now the length of array is: "+sl.length);
	console.log("Array: "+sl);	
}

//Question 5
function que5(){
	var Months = ["jan","feb","march","april","june","july","aug","sep","nov","dec"];
	console.log("Array is: "+Months);
	Months.pop();
	console.log("Now length of Array is:"+Months.length);	
	console.log("****POPED ARRAY****");
	counter = 1;
	for(var i=0;i<Months.length;i++)
	{
		console.log("Quote "+counter+": "+Months[i]);
		counter++;
	}

	console.log("****Performing 'reverse()' method on above generated ARRAY****");
	Months.reverse();
	console.log("****REVERSED ARRAY****");
	counter = Months.length;
	for(var i=0;i<Months.length;i++)
	{
		console.log("Quote "+counter+": "+Months[i]);
		counter--;
	}
	console.log("****8th array element****");
	console.log("Quote : "+Months[7]);

	console.log("****Performing 'shift()' method on above generated ARRAY****");
	Months.shift();
	console.log("Now length of Array is:"+Months.length);
	console.log("****SHIFTED ARRAY****");
	counter = Months.length;
	for(var i=0;i<Months.length;i++)
	{
		console.log("Quote "+counter+": "+Months[i]);
		counter--;
	}

	console.log("****Performing 'sort()' method on above generated ARRAY****");
	Months.sort();
	console.log("****SORTED ARRAY****");
	counter = 1;
	for(var i=0;i<Months.length;i++)
	{
		console.log("Quote "+counter+": "+Months[i]);
		counter++;
	}

	var arr = prompt("Enter few numbers with space between them!"); 
	var res = arr.split(" ");
	console.log("Array is: "+res);
	console.log("Length of Array is: "+res.length);
	
	console.log('Performing push("12") method on array');
	res.push("12");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing unshift("r") method on array');
	res.unshift("r");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing splice(4,0,"a","b") method on array');
	res.splice(4,0,"a","b");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);	

	console.log('Performing slice(3,6) method on array');
	var sl = res.slice(3,9);
	console.log("Now the length of array is: "+sl.length);
	console.log("Array: "+sl);


	console.log("***THREE GENERATED ARRAYS***");
	console.log("Array 1: "+Months);
	console.log("Array 2: "+sl);

	console.log("Performing concat() method on these two generated Arrays");
	var finalArray = Months.concat(sl);

	pointer = 0;
	for(var i=0;i<finalArray.length;i++)
	{
		console.log("Index "+pointer+": "+finalArray[i]);
		pointer++;
	}
}

//Question 6
function que6(){
	var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	console.log("Declared array is: ["+days+"]");
	console.log("*****Printing array individually*****");
	counter = 0;
	for(var i=0;i<days.length;i++)
	{
		console.log("Index "+counter+": "+days[i]);
		counter++;
	}
}

//Question 7
function que7(){
	var weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	var day = prompt("Enter a day of week!");
	switch(day.toLowerCase())
	{
		case "monday":
			console.log(weekDays.slice(1));
			break;
		case "tuesday":
			console.log(weekDays.slice(2));
			break;
		case "wednesday":
			console.log(weekDays.slice(3));
			break;
		case "thursday":
			console.log(weekDays.slice(4));
			break;
		case "friday":
			console.log(weekDays.slice(5));
			break;
		case "saturday":
			console.log(weekDays.slice(6));
			break;
		case "sunday":
			console.log("It is the last day of the week!");
			break;
		default:
			console.log("Please enter valid week day");
	}
	
}

//Question 8
function que8(){
	var weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	var day = prompt("Enter a day of week!");
	switch(day.toLowerCase())
	{
		case "monday":
			console.log(weekDays.slice(1)+","+weekDays.slice(0,1));
			break;
		case "tuesday":
			console.log(weekDays.slice(2)+","+weekDays.slice(0,2));
			break;
		case "wednesday":
			console.log(weekDays.slice(3)+","+weekDays.slice(0,3));
			break;
		case "thursday":
			console.log(weekDays.slice(4)+","+weekDays.slice(0,4));
			break;
		case "friday":
			console.log(weekDays.slice(5)+","+weekDays.slice(0,5));
			break;
		case "saturday":
			console.log(weekDays.slice(6)+","+weekDays.slice(0,6));
			break;
		case "sunday":
			console.log(weekDays.slice(0));
			break;
		default:
			console.log("Please enter valid week day");
	}
}

//Question 9
function que9(){
	
}







