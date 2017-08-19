//Question 1
function que1(){
	var p1 = document.getElementById("para1");
	alert(p1.innerHTML)
}

//Question 2
function que2(){
	var p2 = document.getElementById("para2");
	p2.style.backgroundColor = "yellow";
	p2.style.color = "red";
}

//Question 3
function que3(){
	var textBox1 = document.getElementById("text1");
	var textBox2 = document.getElementById("text2");

	textBox2.value = textBox1.value;
}

//Question 4
function que4a(){
	var image1 = document.getElementById("img1");
	image1.src = "../images/img2.jpg";
}
function que4b(){
	var image1 = document.getElementById("img1");
	image1.style.visibility = "hidden";
}
function que4c(){
	var image1 = document.getElementById("img1");
	image1.style.visibility = "visible";
}

//Question 5

var imageShow = document.getElementById("image");
var i=0;
var imageArray = ['../images/img1.jpg','../images/img2.jpg','../images/img3.jpg','../images/img4.jpg','../images/img5.jpg','../images/img6.jpg','../images/img7.jpg','../images/img8.jpg','../images/img9.jpg','../images/img10.jpg'];

	
	//console.log(images.length);	
	var prevButton = document.getElementById("prev-btn");
	var nextButton = document.getElementById("next-btn");

	function next()
	{
		if(i<imageArray.length-1)
		{
			i++;
		}
		else
		{	
			i=0;
		}
		imageShow.src=imageArray[i];
		console.log(i);
	}
	function prev()
	{
		if(i>0)
		{
			i--;
		}
		else
		{
			i = imageArray.length-1;
		}
		imageShow.src = imageArray[i];
		console.log(i);

	}

