//Question 1
function que1(){
	var p = document.getElementById("para");
	var sel = document.getElementById("modify");

	switch(sel.value)
	{
		case "1":
			p.style.visibility = "hidden";
			break;	
		case "2":
			p.style.color = "red";
			break;
		case "3":
			p.style.visibility = "visible";
			p.style.color = "blue";
			break;
		case "4":
			p.style = null;
			break;
		default:
			alert("Select proper option");		
	}
}

//Question 2
function que2(){
	var t1 = document.getElementById("firstText");
	var t2 = document.getElementById("secondText");

	t2.value = t1.value;
	t1.value = "";
}

//Question 4
function que4(){
	var div = document.getElementById("border-div");
	var t = document.getElementById("colorChange");

	if(t.value == "black")
	{
		div.style.border = "3px solid black"
	}
	else if(t.value == "red")
	{
		div.style.border = "3px solid red"
	}
	else
	{
		alert("please enter a valid color(red or black)");
	}
}

//Question 5
function que5(){
	var r1 = document.getElementById("radio1");
	var r2 = document.getElementById("radio2");
	var t1 = document.getElementById("text1");
	var t2 = document.getElementById("text2");

	if(t1.value != "")
	{
		r1.checked = true;
	}
	else if(t2.value != "")
	{
		r2.checked = true;
	}
	else
	{
		alert("Please enter in one text box");
		return false;
	}
}

//Question 10
function que10(){
	var r = document.getElementById("radioButton");
	var c = document.getElementById("checkBox");
	var s = document.getElementById("dropDown");
	var text1 = s.options[s.selectedIndex].text;
	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2");
	var p3 = document.getElementById("p3");
	var div1 = document.getElementById("firstDiv");
	var div2 = document.getElementById("secondDiv");

	div2.style.display = "block";

	if(r.checked == true)
	{
		p1.innerHTML= "Radio checked";
		div2.style.display = "block";
	}
	if(c.checked == true)
	{
		p2.innerHTML= "Checkbox checked";
		div2.style.display = "block";
	}
	if(s.value == "")
	{
		return false;
	}
	else
	{
		p3.innerHTML = text1;
	}
}
function display(){
	var div2 = document.getElementById("secondDiv");
	div2.style.display = "none";
}

//Question 11
	var text1 = document.getElementById("text-que11");
	var r1 = document.getElementById("radio1-que11");
	var r2 = document.getElementById("radio2-que11");
	var ch = document.getElementById("checkbox-que11");
	var p1 = document.getElementById("p1-q11");
	var p2 = document.getElementById("p2-q11");
	var p3 = document.getElementById("p3-q11");
	var p4 = document.getElementById("p4-q11");
	var p5 = document.getElementById("p5-q11");

function que11(){
	
	textCheck();
	radioSelect();	
	check();
	selectFruits();
	alert("The form has been successfully submitted");
}

function textCheck(){	
	if(isNaN(text1.value))
	{
		p1.innerHTML = "string";
	}
	else if(text1.value == "")
	{
		p1.innerHTML = "null";
	}
	else if(isNaN(text1.value)==false)
	{
		p1.innerHTML = "number";
	}
}

function radioSelect(){

	if(r1.checked == true)
	{
		p2.innerHTML = "Radio 1 selected";
	}
	if(r2.checked == true)
	{
		p3.innerHTML = "Radio 2 selected";
	}
	else
	{
		return false;
	}
}

function check(){

	if(ch.checked == true)
	{
		p4.innerHTML = "Checked";
	}
	else
	{
		p4.innerHTML = "unchecked";
	}
}

function selectFruits(){
	var selOpt = document.getElementById("selectOption");
	var textSel = selOpt.options[selOpt.selectedIndex].text;
	if(selOpt.value == "")
	{
		return false;
	}
	else
	{
		p5.innerHTML = textSel;
	}
}


//Question 12
function que12(){
	var span = document.getElementById("image-span");
	var txt = document.getElementById("image-text");

	span.innerHTML = txt.value;
}
