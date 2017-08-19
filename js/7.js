function withdrawMoney()
{
	var amount = prompt("Please enter the amount in multiples of 20 you want to withdraw");

	while(amount !== "exit")
	{
		if(isNaN(amount))
		{
			alert("Please enter a valid number");
		}
		else
		{	
			if(amount%20 === 0)
			{
					alert("Your amount is ready!");
					var ans = prompt("Do you want to exit? 'y' or 'n'");
					if(ans == "y")
					{
						alert("OK, bye!");
						return false;			
					}
					else if(ans == "n")
					{
						withdrawMoney();
						return true;
					}	
			}
			else
			{
				alert("Please enter multiples of 20");
			}
		}
		amount = prompt("Please enter the amount in multiples of 20 you want to withdraw");	
	}
}