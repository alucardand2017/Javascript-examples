const alunosNomes1  = ["John", "Sara", "Paul", "Linda", "Mark"];
const alunosNomes2  = ["Ken", "Chun-li", "Guile", "Bison", "Ryu"];


const novoArray = [...alunosNomes1];
const novoArray2 = [];

alunosNomes1.forEach((element, index) => {
    novoArray2.push(element);
});
novoArray.pop();
novoArray2.pop();
novoArray.pop();

console.log(novoArray);
console.log(novoArray2);
console.log(alunosNomes1);


