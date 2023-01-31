const livros = require('./listaLivros');

function insertionSort(lista){

    for(atual = 0 ; atual < lista.length ; atual++){
        let analisada = atual;

        while(analisada >0 && lista[analisada].preco < lista[analisada -1].preco){
            
            trocaPosicao(lista, analisada);

            analisada--;
        }
    }

    console.log(lista);
}
insertionSort(livros);

function trocaPosicao(lista, analisada) {
    itemAnalisado = lista[analisada];
    itemAnterior = lista[analisada - 1];

    lista[analisada] = itemAnterior;
    lista[analisada - 1] = itemAnalisado;
}

