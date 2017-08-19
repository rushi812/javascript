//Question 1
function que1(){
	var age = prompt("Enter your age!");

	switch(age)
	{

		case "14":
			alert("coupon 1");
			break;
		case "21":
			alert("coupon 2");
			break;
		case "30":
			alert("coupon 3");
			break;
		case "50":
			alert("coupon 4");
			break;
		default:
			alert("No coupon");
	}
}

//Question 2
function que2(){
	var day = prompt("Enter a day of week!");

	switch(day)
	{
		case "Monday":
			alert("Mondays, We serve Pasta");
			break;
		case "Tuesday":
			alert("Tuesdays, We serve Tacos");
			break;
		case "Wednesday":
			alert("Wednesdays, We serve Subway");
			break;
		case "Thursday":
			alert("Thursdays, We serve Chicken");
			break;
		case "Friday":
			alert("Fridays, We serve Nachos");
			break;
		case "Saturday":
			alert("Saturdays, We serve Noodels");
			break;
		case "Sunday":
			alert("Sundays, We serve EVERYTHING");
			break;
		default:
			alert("Enter a valid week day!");

	}
}

//Question 3
function que3(){
	var year = prompt("Enter a year!");

	switch(year)
	{
		case "2003":
			alert("Movie 1 won oscar");
			break;
		case "2004":
			alert("Movie 2 won oscar");
			break;
		case "2005":
			alert("Movie 3 won oscar");
			break;
		case "2006":
			alert("Movie 4 won oscar");
			break;
		case "2007":
			alert("Movie 5 won oscar");
			break;
		case "2008":
			alert("Movie 6 won oscar");
			break;
		case "2009":
			alert("Movie 7 won oscar");
			break;
		case "2010":
			alert("Movie 8 won oscar");
			break;
		case "2011":
			alert("Movie 9 won oscar");
			break;
		case "2012":
			alert("Movie 10 won oscar");
			break;
		default:
			alert("Please enter year between 2003-2012");

	}
}

//Question 4
function que4(){
	var grade = prompt("Enter your grade");

	switch(grade)
	{
		case "A+":
			alert("Excellent!");
			break;
		case "A":
			alert("Excellent!");
			break;
		case "A-":
			alert("Good Job");
			break;
		case "B+":
			alert("Not Bad");
			break;
		case "B":
			alert("Average");
			break;
		case "B-":
			alert("Below Average");
			break;
		case "C":
			alert("Need to improve, work hard!");
			break;
		case "F":
			alert("very bad, call parents >:(");
			break;
		default:
			alert("Enter valid grade");
	}
}