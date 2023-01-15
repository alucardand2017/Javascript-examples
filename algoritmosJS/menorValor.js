
function menorValor(arrayProdutos, posicaoI){
    maisBarato = posicaoI;
    for(let atual = posicaoI ; atual < arrayProdutos.length ; atual++){
        if(arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;