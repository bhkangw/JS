var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
var time;
var	hour;
var day;

if(MINUTE > 30){
	time = " almost ";
	hour = HOUR+1;
}

else{
	time = " just after ";
	hour = HOUR;
}

if(PERIOD === "AM"){
	day = " in the morning";
}

else{
	day = " in the evening";
}

if(HOUR===12 && MINUTE > 30){
	hour = 1;
}


console.log("It's", time, hour, day);