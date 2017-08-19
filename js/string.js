//Question 1 2 3
function que123(){
	alert('Output of "3"+5+6 is: ' +("3"+5+6));
	alert('Output of 3+"5"+6 is: ' +(3+"5"+6));
	alert('Output of 3+5+"6" is: ' +(3+5+"6"));
}

//Question 4 5 6
function que456(){
	var str = "Pneumonoultramicroscopicsilicovolcanoconiosis";
	alert("Length of 'Pneumonoultramicroscopicsilicovolcanoconiosis' is: "+str.length);
	alert("'Pneumonoultramicroscopicsilicovolcanoconiosis' in Upper case: "+str.toUpperCase());
	alert("'Pneumonoultramicroscopicsilicovolcanoconiosis' in Upper case: "+str.toLowerCase());
}

//Question 7
function que7(){
	var str = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
	console.log('String is: "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user"');
	var cut = str.split(';');	
	console.log("****BROKEN STRING****");
	for(var i=0;i<cut.length;i++)
	{
		console.log(cut[i].trim());
	}	
}

//Question 8
function que8(){
	var str = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
	var count = str.match(/o/g).length;
	console.log('String is: "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user"');
	console.log("Number of time 'o' appears is: "+count);	
}

function que9(){
	var str = "I like this product; I hate this product";
	var rep = str.replace(/product/g,"javascript");
	console.log("String is: 'I like this product; I hate this product'");
	console.log("MODIFIED STRING: "+rep);
}

//Question 10
function que10(){
	var str = " Javascript notation %^&* notes that structure rules and not context for nothing";
	var count = str.match(/not/gi).length;

	var str2 = 'Now, for the above problem, create an array with texts before and after "not" occurrences';
	var count1 = str2.match(/not/gi).length

	console.log("STRING IS: 'Javascript notation %^&* notes that structure rules and not context for nothing'");
	console.log("Number of times 'not' appears is: "+count);

	console.log("STRING IS: 'Now, for the above problem, create an array with texts before and after \"not\" occurrences'");
	console.log("Number of times 'not' appears is: "+count1);
}

//Question 11
function que11(){
		
}