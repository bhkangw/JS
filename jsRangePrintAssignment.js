// Range Print
// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.

// For example:

// printRange(2, 10, 2);
// Copy
// Would print

// 2
// 4
// 6
// 8
// (Should go UP TO, but NOT INCLUDING the end point)

function printRange(start, end, skip){
	for(var i = start; i < end; i+=skip){
		console.log(i);
	}
}
printRange(3,10,1);

// If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)

function printRange(start, end, skip){
	if(skip === undefined){
		skip = 1;
	}
	for(var i = start; i < end; i+=skip){
		console.log(i);
	}
}
printRange(3,10);

// If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3)

function printRange(start, end, skip){
	if(end === undefined){
		end = start;
		start = 0;
		skip = 1;
	}
	for(var i = start; i < end; i+=skip){
		console.log(i);
	}
}
printRange(10);

// Adding the two bonus criteria together

function printRange(start, end, skip){
	if(skip === undefined){
		skip = 1;
	}
	if(end === undefined){
		end = start;
		start = 0;
	}
	for(var i = start; i < end; i+=skip){
		console.log(i);
	}
}
printRange(10);