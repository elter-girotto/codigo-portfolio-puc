// Criando objetos através de construtores

function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};


function descobreTipo(objeto){
    if ('Object' == objeto.constructor.name) {
        console.log('É um objeto raiz');
    } else {
        console.log("é um objeto do tipo " + objeto.constructor.name);
    }
};

// Criando primeiro objeto pessoa
const pessoa = new Pessoa("João da Silva", 1982, "Comerciante");
console.log(pessoa);
console.log("Idade de " + pessoa.nome + ": " + pessoa.calculaIdade());

// Criando segundo objeto pessoa
const pessoa2 = new Pessoa("Maria de Souza", 2012, "Estudante");
console.log(pessoa2);
console.log("Idade de " + pessoa2.nome + ": " + pessoa2.calculaIdade());

// Criando uma pessoa através de Object
const pessoa3 = new Object();
pessoa3.nome = "Pedro";
pessoa3.anoDeNascimento = 1998;
pessoa3.profissao = "Médico";
pessoa3.calculaIdade = function() {
    return new Date().getFullYear() - this.anoDeNascimento;
}

console.log(pessoa3);
console.log("Idade de " + pessoa3.nome + ": " + pessoa3.calculaIdade());

// Herança entre objetos através do Prototype
console.log(pessoa.valueOf());
console.log(descobreTipo(pessoa)); // Tipo do construtor
console.log(descobreTipo(pessoa3)); // Tipo do construtor

console.log(Object.getPrototypeOf(pessoa)); // Tipo do prototype
console.log(Object.getPrototypeOf(pessoa3)); // Tipo do prototype


// Utilizando o Object.create() para criar objetos
const pessoa4 = Object.create(pessoa3); // Criando a partir de um objeto do tipo Object
console.log(pessoa4.constructor);

const pessoa5 = Object.create(pessoa2); // Criando a partir de um objeto do tipo Pessoa
console.log(pessoa5.constructor);

// Herança prototipada
Pessoa.prototype.saudar = function() {
    console.log("Olá");
}

console.log(pessoa.saudar());