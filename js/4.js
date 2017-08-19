//Question 4a
function setValue(fName,lName,batmanAge){
	setCustInfo(fName,batmanAge);
	alert(displayCustInfo(lName));
}
function setCustInfo(name,i){
	alert("The name is set as: "+name);
	batman_age = i;
}
function displayCustInfo(name){
	alert("Name is displayed as: "+name);
	return name + " "+batman_age;
}
var batman_age = 27;

//Question 4b
function setValue4b(fName,lName,batmanAge){
	setCustInfo4b(lName,batmanAge);
	alert(lName+" "+batman_age);
	displayCustInfo4b(fName);
}
function setCustInfo4b(name,i){
	alert("The name is set as: "+name);
	batman_age = i;
}
function displayCustInfo4b(name){
	alert("Name is displayed as: "+name);
	return name + " "+batman_age;
}
var batman_age = 27;

//Question 4c
function setValue4c(fName,lName,batmanAge){
	checkPerson();
}
function setCustInfo4c(name,i){
	alert("The name is set as: "+name);
	batman_age = i;
}
function displayCustInfo4c(name){
	alert("Name is displayed as: "+name);
	return name + " "+batman_age;
}
function checkPerson(){
	var age = prompt("Enter age to check who is this person");
	if(age == batman_age)
	{
		alert("THIS person seems like BATMAN");
	}
	else if(age == 24)
	{
		alert("This person may be ROBIN");
	}
	else{
		alert("I am not sure who this joker is");
	}
}
var batman_age = 27;
