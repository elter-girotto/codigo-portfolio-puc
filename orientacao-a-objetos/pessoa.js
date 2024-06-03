var pessoa = {
    nome: "Valentina",
    idade: 60,
    saudar: function() {
        console.log("olá");
    }
};

pessoa.saudar();
pessoa.idade = 30;
console.log("Nova idade atribuída: " + pessoa.idade);