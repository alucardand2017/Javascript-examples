const {edFolha , edGalho} = require('./arrays');



function ordenacao(lista1, lista2){

    let finalArray = [];
    let posList1 = 0;
    let posList2 = 0;
    let posOrdList = 0;

    while(posList1 < lista1.length && posList2 < lista2.length){
        elementList1 = lista1[posList1];
        elementList2 = lista2[posList2];

        if(elementList1.preco < elementList2.preco){
            finalArray[posOrdList] = elementList1;
            posList1++;
        }
        else{
            finalArray[posOrdList] = elementList2;
            posList2++;
        }
        posOrdList++;
    }

    while(posList1 < lista1.length){
        elementList1 = lista1[posList1];
        finalArray[posOrdList] = elementList1;
        posList1++;
        posOrdList++;
    }
    while(posList2 <lista2.length){
        elementList2 = lista2[posList2];
        finalArray[posOrdList] = elementList2;
        posList2++;
        posOrdList++;
    }

    return finalArray;
}

console.log(ordenacao(edFolha, edGalho));