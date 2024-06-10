// 04a_arrow

// Função sem parâmetro
var somar = () => console.log("função sem parâmetros");
somar();
somar(1);

// função sem parâmetro com underscore
somar = _ => console.log("usando underscore");
somar();

// função com parâmetros e 1 expressão
somar = (x,y) => x + y; // retorna soma de x + y
console.log(somar(1,2));

// funcção com parâmetros e mais de 1 expressão ou statement
somar = (x,y) => {return x + y};
console.log(somar(3,4));

// funcção com 1 expressão - retorna o maior número 
maiorNumero = (x,y) => x>y?x:y; // ternário

// função com mais de 1 expressão - retorna o maior número 
maiorNumero = (x, y) => {
    if (x>y)
        return x;
    else
        return y;
}
console.log(maiorNumero(7,8));