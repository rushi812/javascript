
//Question 1

function fahrenheit(){
	var f = document.getElementById("inputValue");
	var c = document.getElementById("outputValue");


	if(isNaN(f.value))
	{
		alert("Please a valid fahrenheit value");
		f.style.border = "2px solid red";
	}
	else
	{
		c.value = parseInt((f.value-32)*5/9);
		f.style.border = "none";
	}
	return false;
}

//question 2
function pageLoad(){
	alert("Welcome, to my blog!");
}

//Question 3 and 4
function hide(){
	var h = document.getElementById("hideDiv");
	var hideInput = document.getElementById("hideElems");

		h.style.display = 'none';
}

function show(){
	var s = document.getElementById("hideDiv");

		s.style.display = 'block';
}

//Question 5
var ul = document.getElementById("over_out");
var inp = document.getElementById("inputButton");

function mouseOver(){
	ul.style.visibility = "visible";
}

function mouseOut(){
	ul.style.visibility = "hidden";
}


//Question 6
var m1 = document.getElementById("main_one");
var m2 = document.getElementById("main_two");
var m3 = document.getElementById("main_three");
function que6(){

	alert("Elements with id main_one,main_two,main_three will be hidden now");
	m1.style.visibility = "hidden";
	m2.style.visibility = "hidden";
	m3.style.visibility = "hidden";
}
function que6Show(){
	m1.style.visibility = "visible";
	m2.style.visibility = "visible";
	m3.style.visibility = "visible";

}

//Question 7
var check = document.getElementsByName("check-list");
function checkall(){
	for(var i=0; i<check.length;i++)
	{
		check[i].checked = true;
	}
}
function uncheckall(){
	for(var i=0; i<check.length;i++)
	{
		check[i].checked = false;
	}
}

//Question 8
function validate(){
	var state = document.getElementById("state");
	var name = document.getElementById("name");
	var fruit = document.getElementById("fruit");
	var car = document.getElementById("car");
	var city = document.getElementById("city");
	var textState = state.options[state.selectedIndex].text;
	var textName = name.options[name.selectedIndex].text;
	var textFruit = fruit.options[fruit.selectedIndex].text;
	var textCar = car.options[car.selectedIndex].text;
	var textCity = city.options[city.selectedIndex].text;

	if(state.value == "")
	{
		alert("Please select STATE");
	}
	else if(name.value == "")
	{
		alert("Please select NAME");
	}
	else if(fruit.value == "")
	{
		alert("Please select FRUIT");
	}
	else if(car.value == "")
	{
		alert("Please select CAR");
	}
	else if(city.value == "")
	{
		alert("Please select CITY");
	}
	else
	{
		alert("STATE: "+textState+"\nNAME: "+textName+"\nFRUIT: "+textFruit+"\nCAR: "+textCar+"\nCITY: "+textCity);
	}	
}


//question 10
function showValues(){
	var f = document.getElementById("firstName");
	var l = document.getElementById("lastName");
	var male = document.getElementById("maleId");
	var female = document.getElementById("femaleId");
	var state = document.getElementById("state");
	var text = state.options[state.selectedIndex].text; 
	div1 = document.getElementById("formDiv");
	div2 = document.getElementById("viewDiv");
	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2"); 
	var p3 = document.getElementById("p3"); 
	var p4 = document.getElementById("p4");
	var edit = document.getElementById("edit");
	var form = document.getElementById("myForm");

	div2.style.display = "block";
	
	p1.innerHTML = "<strong>First Name:</strong> "+f.value;
	p2.innerHTML = "<strong>Last Name:</strong> "+l.value;

	if(male.checked==true)
	{
		p3.innerHTML = "<strong>Gender:</strong> "+male.value;
	}
	else if(female.checked == true)
	{
		p3.innerHTML = "<strong>Gender:</strong> "+female.value;	
	}
	else
	{
		return false;
	}
	p4.innerHTML = "<strong>State:</strong> "+text;

	div1.style.display = "none";

}
function hidebutton(){
	var div2 = document.getElementById("viewDiv");
	div2.style.display = "none";
}

function showform(){
	div1.style.display = "block";
	div2.style.display = "none";
}


//Math & Date Question 2
function md2(){
	var today = document.getElementById("day");
	var dish = document.getElementById("special-dish");

	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	today.innerHTML = "Today is "+"<strong>"+days[d.getDay()]+"</strong>";
	dish.innerHTML = "Today's special dish is <strong>Paneer Butter Masala!</strong>"
}
