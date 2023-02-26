function calculateExp(){	
	// To set two dates to two variables
	var date1 = new Date("07/05/2021");
	var date2 = new Date();
//	alert("date1 :: "+date1);
//	alert("date2 :: "+date2);
	// To calculate the time difference of two dates
	var Difference_In_Time = date2.getTime() - date1.getTime();
	
	// To calculate the no. of days between two dates
	var Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24));
//	alert("Difference_In_Time :: "+Difference_In_Time);
//	alert("Difference_In_Days :: "+Difference_In_Days);//600.5493064699074
	
	var year = parseInt(Difference_In_Days/365);
	var monthss = parseInt((Difference_In_Days%365)/30);
	var days = parseInt(((Difference_In_Days%365)%30));
	var yLabel = " Year ";
	var mLabel = " Month ";
	var dLabel = " Day";
	if(year>1)
		yLabel = " Years ";
	if(monthss>1)
		mLabel = " Months";
	if(days>1)
		dLabel = " Days";
	
	
	var rounded = Math.round(year * 10) / 10;
	// rounded is 12.3
//	alert("year :: "+parseInt(year));
//	alert("monthss :: "+parseInt(monthss));
//	alert("days :: "+parseInt(days));
//	alert("rounded :: "+rounded);

//	if you want it to have one decimal place, even when that would be a 0, then add...

//	var fixed = rounded.toFixed(1)
	// fixed is always to 1 d.p.
	// NOTE: .toFixed() returns a string!
//	alert("fixed :: "+fixed);

	// To convert back to number format
	//..parseFloat(year.toFixed(2))
	
//		document.getElementById("exp").innerHTML = Difference_In_Days/365;
		document.getElementById("exp").innerHTML = year +yLabel+monthss+mLabel;  //+days+dLabel;
	
	//To display the final no. of days (result)
	/*
	console.log("Total number of days between dates <br>"
			+ date1 + "<br> and <br>"
			+ date2 + " is: <br> "
			+ Difference_In_Days);
	*/
}

