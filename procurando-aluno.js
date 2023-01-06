const notasAlunos = [10.0, 6.0, 8.0, 7.0, 6.0];
const alunosNomes = ["John", "Sara", "Paul", "Linda", "Mark"];
const boletim = [alunosNomes, notasAlunos];

if(boletim[0,0].includes("Sara")){
console.log(`${"Sara"} está cadastrada.`);
console.log(`seu nome é ${boletim[boletim[0].indexOf("Sara")]} seu índice no array é ${boletim[0,0].indexOf("Sara")} e sua média é ${boletim[boletim[0,0].indexOf("Sara")]}`);
}
else
{
    console.log("não está cadastrado.");
}