//01c_var.js
function testVar() {
    var var01 = "var 01"
    {        
        console.log("01a." + var01)
        var var02 = "var 02"
        console.log("02a." + var02)
    }
    var var01 = "var 03"
    console.log("03a." + var01)    
}

testVar();