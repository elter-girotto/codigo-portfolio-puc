// 05f_arrayMap

// Array.map() - Permite transformar os elementos da lista

array = [4,5,6,7,8,9,10];

var newArray = array.map( (item) => item*2 ); //substitui item por item*2 
console.log(newArray);

newArray = array.map( (item) => {return {x: item, y: 2*item}} ); //cada número inteiro é substituído por um objeto de valores inteiros - par chave valor
console.log(newArray);