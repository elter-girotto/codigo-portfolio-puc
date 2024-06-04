var pessoa = {
    nome: "Valentina",
    idade: 60,
    saudar: function(nomeDoAmigo) {
        console.log("olá " + nomeDoAmigo);
    }
};

pessoa.saudar("Carlos");
pessoa.idade = 30;
console.log("Nova idade atribuída: " + pessoa.idade);