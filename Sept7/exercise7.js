function setupCounter() {
   let count = 0; // Define a count variable here

    return function() {
        count++; // Increment and print the count
        console.log(count)// Create a counter instance and invoke it to test
    }
}
let myVar = setupCounter();

myVar()
myVar()
myVar()
myVar()