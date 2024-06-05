class Estudante extends Pessoa {
    constructor(nome, anodeNascimento, matricula){
        super(nome, anodeNascimento, "Estudante");
        this.matricula = matricula;
    }
}

const aluno1 = new Estudante("Júlio", 1985, 3541433);
console.log(aluno1);