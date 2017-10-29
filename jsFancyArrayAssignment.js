// Fancy Array
// Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

// [ "James", "Jill", "Jane", "Jack" ]
// Let's make it look fancy! Write a function that will make it print like:

// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack

var arr = ["James", "Jill", "Jane", "Jack"];

for(var i = 0; i < arr.length; i++){
	console.log(i + " -> " + arr[i]);
}


// Bonus (Only If You Have Time):

// Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")

var arr = ["James", "Jill", "Jane", "Jack"];
var symbol = ""

for(var i = 0; i < arr.length; i++){
	console.log(i + symbol + arr[i]);
}

// Have an extra parameter reversed. If the user passes true, print the elements in reverse order

var arr = ["James", "Jill", "Jane", "Jack"];
var symbol = ""
var reverse = false;

if(reverse === true){
	for(var i = arr.length-1; i >= 0; i--){
	console.log(i + symbol + arr[i]);
	}
}
else{
	for(var i = 0; i < arr.length; i++){
	console.log(i + symbol + arr[i]);
	}
}
