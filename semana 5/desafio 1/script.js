
for ( var i = 0; i <= 40; i++ ) {
	if ( (i % 3 == 0) && (i % 5 == 0)) { 
		console.log('FizzBuzz'); // execute if true
	} else if ( (i % 5) == 0 ) {  
		console.log('Buzz'); // execute if first condition false
	} else if ( (i % 3) == 0 ) { 
		console.log('Fizz'); // execute if first+second condition false 
	} else { 
		console.log(i); // execute if all other false
	}
}
