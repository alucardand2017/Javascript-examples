const alunosNomes2  = ["Ken", "Chun-li", "Guile", "Bison", "Ryu", "Guile", "Chun-li"];
function setNaMao(){
    const novoArray = [];
    let flagIgual = false;
    alunosNomes2.forEach((element) => {
        novoArray.forEach((otherElement) =>{
            if(element === otherElement)
                flagIgual = true;
        });
        if(flagIgual)
            flagIgual = false;
        else 
            novoArray.push(element);
    });
    return novoArray;
}
const alunosAtualizados = [...new Set(alunosNomes2)];  

console.log(alunosAtualizados);
console.log(setNaMao());

