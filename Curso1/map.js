const mediasAlunos = [10.0, 6.0, 8.0];

const novasMedias = mediasAlunos.map((nota) => {
return nota+1 >= 10 ? 10 : nota+1;
}); 

console.log(novasMedias);