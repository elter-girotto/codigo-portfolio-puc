// Variaveis locais

function Pessoa(nomeParam, anoDeNascimentoParam, profissaoParam) {
    let nome = nomeParam;
    let anoDeNascimento = anoDeNascimentoParam;
    let profissao = profissaoParam;
    this.calculaIdade = function() {
        return new Date().getFullYear() - anoDeNascimento;
    }
};

const pessoa = new Pessoa("Elter Girotto", 1975, "Bibliotecário");
console.log(pessoa);
