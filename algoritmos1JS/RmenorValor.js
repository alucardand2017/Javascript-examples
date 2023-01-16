const livros = require("./listaLivros");
function RmenorValor(arrayP, posI){
    maisBarato = posI;
    for(let atual = posI ; atual < arrayP.length ; atual++){
        if(arrayP[atual].preco < arrayP[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = RmenorValor;