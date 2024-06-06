//02b_let.js
function testVar() {
    let let01 = "let 01"
    {
        var let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)    
    console.log("02b." + let02)
}

testVar();