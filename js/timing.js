function imgAuto(){
	var imageShow = document.getElementById("image");
	var i=0;
	var imageArray = ['../images/img1.jpg','../images/img2.jpg','../images/img3.jpg','../images/img4.jpg','../images/img5.jpg','../images/img6.jpg','../images/img7.jpg','../images/img8.jpg','../images/img9.jpg','../images/img10.jpg'];


	setInterval(function(){

		imageShow.src = imageArray[i];
		i++;
		
		if(i>=imageArray.length)
		{
			i = 0;
		}

	},1000);

}

//Question 2
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
function quoteAuto(){
	var i=0;
	var quoteShow = document.getElementById("quote");

	setInterval(function(){
		quoteShow.textContent = quotes[i];
		console.log(quoteShow.textContent);
		i++;
		if(i>=quotes.length)
		{
			i=0;
		}
	},1000);
}

//Question 3
function quoteRandom(){
	var quoteShow = document.getElementById("random-quote");

	setInterval(function(){
		quoteShow.textContent = quotes[Math.floor(Math.random()*quotes.length)];
		console.log(quoteShow.textContent);
	},1000);
}



