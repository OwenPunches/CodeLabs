let name = "Owen" // Declare a global variable here

function modifyGlobal() {
    let name = "Not Owen" // Try to modify the global variable here
}

function localScopeTest() {
    let name = "Owen" // Declare a local variable with the same name as the global variable
}

console.log(name)// Call both functions here