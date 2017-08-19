//Question 1
function que1(){
	var age = prompt("Enter your age!");

	if(age<=14 || age>=65)
	{
		alert("Not allowed!");
		console.log("rushi");
	}
	else if(age == 50)
	{
		alert("Whoo! you get Special discount :)");
	}
	else if(age > 14 && age < 65)
	{
		alert("Regular price!");
	}
	else{
		alert("nothing");
	}
}

//Question 2
function que2(){
	var age=prompt("Enter you age!");

	if(age==14)
	{
		alert("coupon 1");
	}
	else if(age == 21)
	{
		alert("coupon 2");
	}
	else if(age==30)
	{
		alert("coupon 3");
	}
	else if(age == 50)
	{
		alert("coupon 4");
	}
	else
	{
		alert("no coupon");
	}
}

//Question 3
function que3(){
	var day = prompt("Enter name of a day");

	if(day == "Monday")
	{
		alert("Mondays, We serve Pasta");
	}
	else if(day == "Tuesday")
	{
		alert("Tuesdays, We serve Tacos");
	}
	else if(day == "Wednesday")
	{
		alert("Wednesdays, We serve Subway");
	}
	else if(day == "Thursday")
	{
		alert("Thursdays, We serve Chicken");
	}
	else if(day == "Friday")
	{
		alert("Fridays, We serve Nachos");
	}
	else if(day == "Saturday")
	{
		alert("Saturdays, We serve Noodels");
	}
	else if(day == "Sunday")
	{
		alert("Sundays, We serve EVERYTHING");
	}
	else
	{
		alert("Please enter a valid day name");
	}
}
//Question 4

function que4()
{
	var year = prompt("Enter a year!");

	if(year == 2003)
	{
		alert("Movie1, won Oscar");
	}
	else if(year == 2004)
	{
		alert("Movie2, won Oscar");
	}
	else if(year == 2005)
	{
		alert("Movie3, won Oscar");
	}
	else if(year == 2006)
	{
		alert("Movie4, won Oscar");
	}
	else if(year == 2007)
	{
		alert("Movie5, won Oscar");
	}
	else if(year == 2008)
	{
		alert("Movie6, won Oscar");
	}
	else if(year == 2009)
	{
		alert("Movie7, won Oscar");
	}
	else if(year == 2010)
	{
		alert("Movie8, won Oscar");
	}
	else if(year == 2011)
	{
		alert("Movie9, won Oscar");
	}
	else if(year == 2012)
	{
		alert("Movie10, won Oscar");
	}
	else 
	{
		alert("please enter year between 2003-2012");
	}
}

//Question 5
function que5(){
	var grade = prompt("Enter your grade from(A+,A,A-,B+,B,B-,C,F)");

	if(grade == "A+")
	{
		alert("Excellent");
	}
	else if(grade == "A")
	{
		alert("Excellent");	
	}
	else if(grade == "A-")
	{
		alert("Good job");
	}
	else if(grade == "B+")
	{
		alert("Not bad");
	}
	else if(grade == "B")
	{
		alert("Average");
	}
	else if(grade == "B-")
	{
		alert("Below Average");
	}
	else if(grade == "C")
	{
		alert("Need to improve!");
	}
	else if(grade == "F")
	{
		alert("Very bad, Call your parents >:(");
	}
	else
	{
		alert("Enter proper grade");
	}
}