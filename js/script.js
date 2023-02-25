function calculateExp(){
	// JavaScript program to illustrate
	// calculation of no. of days between two date
	
	// To set two dates to two variables
	var date1 = new Date("07/05/2021");
	var date2 = new Date();
	
	// To calculate the time difference of two dates
	var Difference_In_Time = date2.getTime() - date1.getTime();
	
	// To calculate the no. of days between two dates
	var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
	
	var number = Difference_In_Days/365;
	var rounded = Math.round(number * 10) / 10;
	// rounded is 12.3

//	if you want it to have one decimal place, even when that would be a 0, then add...

	var fixed = rounded.toFixed(1)
	// fixed is always to 1 d.p.
	// NOTE: .toFixed() returns a string!

	// To convert back to number format
	//..parseFloat(number.toFixed(2))
	
//		document.getElementById("exp").innerHTML = Difference_In_Days/365;
		document.getElementById("exp").innerHTML = fixed + " years";
	
	//To display the final no. of days (result)
	/*
	console.log("Total number of days between dates <br>"
			+ date1 + "<br> and <br>"
			+ date2 + " is: <br> "
			+ Difference_In_Days);
	*/
}

