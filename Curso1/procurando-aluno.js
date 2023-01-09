const notasAlunos = [10.0, 6.0, 8.0, 7.0, 6.0];
const alunosNomes = ["John", "Sara", "Paul", "Linda", "Mark"];
const boletim = [alunosNomes, notasAlunos];

if(boletim[0,0].includes("Sara")){
console.log(`${"Sara"} está cadastrada.`);
}
else
{
    console.log("não está cadastrado.");
}