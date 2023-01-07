const mediasAlunos = [10.0, 6.0, 8.0, 5.0, 4.0];
const alunosNomes  = ["John", "Sara", "Paul", "Linda", "Mark"];

const aprovados = alunosNomes.filter((nome, index) => {
    return mediasAlunos[index] >= 5;
});

console.log(aprovados);