// Métodos de Arrays

a = ["A", "B", "C"];

// toString - retonra uma string com os valores do array, separados por virgula
console.log(a.toString());

// join() – retorna uma string com os valores do array separados pelo símbolo fornecido
console.log(a.join(" - "));

//  concat() – retorna um novo array resultante da concatenação dos arrays passados por parâmetro
let a2 = a.concat(["X", "Y"]);
console.log (a2);

// slice(indice, fim) – particiona um array e retorna um novo array com a partição, sem alterar o array original
let a3 = a.slice(1); //a[1], a[2]
let a4 = a.slice(0,2); //a[0], a[1]
console.log(a3);
console.log(a4);

/* indexOf(item, inicio) – retorna o índice do array que contem o elemento item,  
opcionalmente a partir da posição inicio; ou -1 caso não encontre */
console.log(a.indexOf("C"));
console.log(a.indexOf("C",2));

/*lastIndexOf(item, inicio) – retorna o índice da última ocorrência do elemento  
item no array (ou seja, realiza a busca de trás para frente), opcionalmente a 
partir da posição inicio; ou -1 caso não encontre */
console.log(a.lastIndexOf("B"));

/* includes(item, inicio) – retorna true caso o array contenha o elemento item, 
opcionalmente a partir da posição inicio; ou false caso contrário */
console.log(a.includes("B"));

/* findIndex(funçãoPredicado) – retorna o index do primeiro elemento do array
de acordo com a função de predicado; retorna -1 caso contrário */
let d = [1,2,3];
let i = d.findIndex(function(item){
    return item >= 2;
});

let e = d.findIndex(function(item){
    return item >= 0 && item <= 2;
});


//forEach(funçãoAplicação) – itera sobre cada elemento do array e chama a função de aplicação sobre cada um
a.forEach(function(item,index){
    console.log(`${item} na posição ${index}`);
})