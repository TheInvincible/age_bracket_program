// define an object
// formulate a function where I count through the object to assign names to the count as new values of the object.
// assign values as squares to the names

var count = {}
	for (let i = 1; i < 16; i++) {
		count[i] = Math.pow(i, 2)
	}
console.log(count)
