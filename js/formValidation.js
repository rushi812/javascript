var varText1 = document.getElementById("inputFirstname");
var varText2 = document.getElementById("inputLastname");
var gender1 = document.getElementById("radio1");
var gender2 = document.getElementById("radio2");
var state = document.getElementById("state");
var checkbox1 = document.getElementById("checked");

function validate(){

	checkName();
	gender();
	// checkLastname();

	varText1.style.background = "red";
	varText2.style.background = "red";

	selectState();
	checkBox();
}

function checkName()
{
	if(!isNaN(varText1.value) || !isNaN(varText2.value))
	{
		alert("Please enter string in Name");	
	}
	else
	{
		return true;
	}
}

function gender(){

	//console.log(gender1.checked);
	//console.log(gender2.checked);
	if(gender1.checked==true || gender2.checked==true)
	{
		return true;
	}
	else
	{
		alert("Please select from male or female");
		return false;
	}
}

function selectState(){	
	if(state.value == "")
	{
		alert("Please select STATE");
		return false;
	}
	else
	{
		return true;
	}
}	

function checkBox(){
	if(checkbox1.checked == false)
	{
		alert("please check the Check Box");
	}
	else
	{
		return true;
	}
}