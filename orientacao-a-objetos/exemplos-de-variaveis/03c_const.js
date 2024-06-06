//03c_const.js
function testConst() {
    const const01 = {propriedade: "valor"}
    console.log("01a." + const01.propriedade)

    const01 = {propriedade: "Novo valor"} //Não aceita nova atribuição através de redefinição de objeto
    console.log("02a." + const01.propriedade)
}

testConst()