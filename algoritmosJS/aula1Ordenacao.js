const precosLivros = [25, 15, 30, 50, 45, 20];
const livros = require("./listaLivros");



listaLivros(livros);
ordena(precosLivros);
console.log(precosLivros);
maisBarato(precosLivros);




function compara(valo1, valor2){
   if(valo1>valor2){
        return true
    }
    return false
}
function troca(array, index1, index2){
    let temp;
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
function ordena(array){
    for(let j = 0 ; j < array.length ; j++){
        for(let i = 0 ; i < array.length ; i++){
            if(compara(array[i],array[i+1])){
                troca(array,i,i+1);
            }
        //console.log(precosLivros[i]);
        }
    }
}
function maisBarato(array){
    let barato = array[0];
    for(let i = 0 ; i < array.length ; i++){
        if(array[i]<barato){
            barato = array[i];
        }
    }
    console.log(`o mais barato é: ${barato}`);
}
function listaLivros(arrayDeObj){
    let barato = arrayDeObj[0].preco;
    let index = 0;
    for(let i = 0 ; i < arrayDeObj.length ; i++){
        if(arrayDeObj[i].preco<barato){
            barato = arrayDeObj[i].preco;
            index = i;
        }
    }
    console.log(`o mais barato é ${livros[index].titulo} com o valor de R$ ${barato} reais`);
}

