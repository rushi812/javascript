//Question 1
function que1(){
	var p = document.getElementById("app-name");

	p.innerHTML = "Browser is: "+"<strong>"+navigator.appCodeName+"</strong>";
}

//Question 2
function que2(){
	var p = document.getElementById("os-name");

	p.innerHTML = "You are using: <strong>"+navigator.platform+"</strong> Operating System"
	
	if(navigator.platform !== "MAC")
	{
		alert("You should use MAC OS!");
	}	
}