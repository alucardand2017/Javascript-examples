const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];
const numeros = [...numerosImpares, ...numerosPares];
console.log(numeros);

const [num1,num2,...outrosNumeros] = [1,2,3,4,5];
console.log(num1,num2,outrosNumeros);

const [moca='Ju'] = [];
console.log(moca);

const pessoa = { nome:'Ju', idade:25}
const pessoaComTelefone = {...pessoa, telefone:123123123}
console.log(pessoaComTelefone);

//da no mesmo fazer
const idade = pessoa.idade;
const {nome} = pessoa;
console.log(nome,idade);


imprimeDados(pessoa);

function imprimeDados({nome, idade}){
    console.log(nome, idade);
}
