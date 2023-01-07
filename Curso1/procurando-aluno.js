const mediasAlunos = [10.0, 6.0, 8.0];
const alunosNomes  = ["John", "Sara", "Paul", "Linda", "Mark"];
const relatorio = [alunosNomes, mediasAlunos];

//console.log(relatorio);
//console.log(alunosNomes,mediasAlunos);

//console.log(relatorio);
//console.log(alunosNomes,mediasAlunos);

mediasAlunos.forEach(element => {
    console.log(element);
});

mediasAlunos.forEach(function(element){
    console.log(element)}
);

mediasAlunos.forEach(function(element, index){
    console.log(element, index, mediasAlunos);
});

for( element of mediasAlunos){
    console.log(element);
}
