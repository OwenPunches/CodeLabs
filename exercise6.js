let myVar ;
function hoistingTest() {
    console.log(myVar)// Try printing a variable here
    myVar = "11";// Declare the variable after the console.log

    

}

hoistingTest();