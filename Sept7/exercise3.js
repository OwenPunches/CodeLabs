function names() {
    let fName = "Owen";
    
    return function middleName() {
        let mName = "Reed";
        
         return function lastName() {
            let lName = "Punches";
            return fName + " " + mName + " " + lName
        }
    }
}

let myVar = names()
let myVar2 = myVar()

console.log(myVar2())


