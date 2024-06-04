function criaPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function() {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
};

const pessoa = criaPessoa("Fulano", 1990, "Estudante");
console.log(pessoa);