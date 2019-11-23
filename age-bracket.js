//ask user to input age
// check age range minor, youth, elder
// print answer

let age = parseInt(prompt("Please enter your age: "), 10);

function ageBracket() {
	if (age < 18)
		console.log("You're a minor");
	else if (age >= 18 || age < 36)
		console.log("You're amongst the youth");
	else
	console.log("You're an elder")
}
console.log(ageBracket());
