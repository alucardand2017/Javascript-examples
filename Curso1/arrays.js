const notasAlunos = [10.0, 6.0, 8.0, 7.0, 6.0];
const alunosNomes = ["John", "Sara", "Paul", "Linda", "Mark"];
const vazio = [];
const names = ["John", "Sara", "Paul", "Linda", "Mark", "Karen", "Steve", "Alice", "David", "Jill", "Mike", "Emily", "Chris", "Kathy", "Dan", "Amy", "Greg", "Jonas", "Bill", "Cida"];
let soma = 0.0;

let osDezPrimeiros = names.slice(0,10);
let osDezUltimos = names.slice(10);

const alunoseMedias = [alunosNomes, notasAlunos];
console.log(alunoseMedias);
//console.log(osDezPrimeiros);
//console.log(osDezUltimos);

//names.splice(0, 10, "Luigi");
//console.log(names);

//console.log(osDezPrimeiros.concat(osDezUltimos));

function pares(value){
    if( value % 2 == 0){
        return value;
    }
}
const impares = (value) => {
    if(value%2 != 0)
        return value;
}
function media(conteudo){
    soma = 0.0;
    conteudo.forEach(element => {
        soma += element;
    });
    return (soma/conteudo.length);
}
function relatorioArray(conteudo){
    console.log(`array: ${conteudo}`);
    console.log('média: ' + media(conteudo));
    console.log('tamanho: ' + conteudo.length + '\n');
}
function testeArray(array){
    relatorioArray(array);
    array.push(7.0);
    relatorioArray(array);
    array.pop();
    relatorioArray(array);
    console.log(array.filter(impares));
    console.log(array.filter(pares));
}
//array com conteudo
//testeArray(notasAlunos);
//console.log("-----------");

//array vazia
//testeArray(vazio);
//console.log("-----------");


