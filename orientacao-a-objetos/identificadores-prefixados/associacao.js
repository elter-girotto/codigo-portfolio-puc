// Associacao entre classes

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


class Nota {
    #grau;
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    };

    setGrau(grau) {
        if (grau < 0 || valor > 10) {
            throw new Error();
        }
        this.#grau = grau;
    }

    getGrau() {
        return this.#grau;
    }
};

// Classe estudante - herda de Pessoa
class Estudante extends Pessoa {
    #matricula;
    notas = [];
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

aluno1.notas = [new Nota("OO", 10), new Nota("Algoritmos", 8), new Nota("Cálculo", 7)];
console.log(aluno1);

