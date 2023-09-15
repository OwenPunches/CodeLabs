function mainFunction() {
	console.log(mainFunction) // Call the hoistedFunction here
	let mfunction = '10' // Now, declare the hoistedFunction below
}

mainFunction();