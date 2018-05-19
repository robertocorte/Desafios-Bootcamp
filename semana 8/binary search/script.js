/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count = 1;
    while( min <= max) {
       guess = Math.floor((max+min)/2);
       //inserted a println function which prints to console the guess at each step
       // console.log(guess);
        if ( array[guess] === targetValue) {
            //counts number of times loop ran
       //     console.log("The while loop ran "+count+" times.");
            return guess;
        } else if (array[guess] < targetValue) {
            min = guess +1;
        } else {
            max = guess -1;
        }
        count++;
    }
	return -1;
};
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 83);
console.log("Found prime at index " + result);
console.log(primes.indexOf(83));