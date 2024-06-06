// Identificadores pré-fixados #

class Pessoa {
    static NOME_CLASSE = "Pessoa";
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    ola(){
        console.log("olá");
    };

    static alerta() {
        console.log ("Esse é um método estático da classe");
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

// Classe estudante - herda de Pessoa
class Estudante extends Pessoa {
    #matricula;
    constructor(nome, anodeNascimento, matricula){
        super(nome, anodeNascimento, "Estudante");
        this.#matricula = matricula;               
    };

    getMatricula() {
        return this.#matricula;
    };

    setMatricula(matricula) {
        this.#matricula = matricula;
    }

};

// Criando um objeto estudante
const aluno1 = new Estudante("Júlio", 1985, 3541433);
console.log(aluno1);
console.log(aluno1.getMatricula());

// Altera matricula do aluno1
aluno1.setMatricula(3541432);
console.log("Matrícula alterada: " + aluno1.getMatricula());
