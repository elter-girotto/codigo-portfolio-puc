
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}

function funcaoComRetorno() {
    return "Alô Mundo!";
}

let msg = funcaoSemRetorno();
console.log(msg);

msg = funcaoComRetorno();
console.log(msg);