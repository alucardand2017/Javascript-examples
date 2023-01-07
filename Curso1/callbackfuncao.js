const alunosNomes  = ["John", "Sara", "Paul", "Linda", "Mark"];

alunosNomes.forEach(element => {
    console.log(element);
});

alunosNomes.forEach((nome) => {
    console.log(nome);
});

function imprime(aluno){
    console.log(aluno);
}

alunosNomes.forEach(imprime);
