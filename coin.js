console.log("I'm in coin.js");

//Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.


var quarterValue = 25;
var dimeValue = 10;
var nickelValue = 5;
var pennyValue = 1;

coinPurse = {
	quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}

 function coinCounter(amount) {
 	var amountToCent = amount * 100;
 	console.log(amountToCent);

	var quarterCount = Math.floor(amountToCent / quarterValue)
	amountToCent -= quarterCount * quarterValue;
	coinPurse.quarters = quarterCount;
	console.log(quarterCount);
	console.log(amountToCent);

	
	var dimeCount = Math.floor(amountToCent / dimeValue)
	amountToCent -= dimeCount * dimeValue;
	coinPurse.dimes = dimeCount;
	console.log(dimeCount);
	console.log(amountToCent);
		
	
	var nickelCount = Math.floor(amountToCent / nickelValue)
	amountToCent -= nickelCount * nickelValue;
	coinPurse.nickels = nickelCount;
	console.log(nickelCount);
	console.log(amountToCent);

		
	
	var pennyCount = Math.floor(amountToCent / pennyValue)
	amountToCent -= pennyCount * pennyValue;
	coinPurse.pennies = pennyCount;
	console.log(pennyCount);


}


coinCounter(1.97);
console.log(coinPurse);

coinCounter(2.22);
console.log(coinPurse);