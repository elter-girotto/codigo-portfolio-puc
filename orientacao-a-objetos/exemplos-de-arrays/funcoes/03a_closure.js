// 03a_closure
// Função que se "lembra" do ambiente em que ela foi criada

function somaValores(x) {
    return function(y) {
    return x + y;
    };
}
    
var soma5 = somaValores(5);   
console.log(soma5(2));
    