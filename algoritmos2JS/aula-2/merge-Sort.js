const listMixed = require("./array");



function mergeSort(list, nivel = 0){
    console.log("nivel = " + nivel);
    console.log(list);
    if(list.length > 1){
        const meio = Math.floor(list.length/2);
        const part1 = mergeSort(list.slice(0, meio), nivel++);
        const part2 = mergeSort(list.slice(meio, list.length), nivel++);
        list = orderList(part1, part2);
    }
    return list;
}

function orderList(list1, list2){
    let poslist1 = 0;
    let poslist2 = 0; 
    const result = [];

    while(poslist1 < list1.length && poslist2 < list2.length){
        if(list1[poslist1].preco < list2[poslist2].preco){
            result.push(list1[poslist1]);
            poslist1++;
        }
        else{
            result.push(list2[poslist2]);
            poslist2++;
        }
    }
    while(poslist1 < list1.length){
        result.push(list1[poslist1]);
        poslist1++;
    }
    while(poslist2 < list2.length){
        result.push(list2[poslist2]);
        poslist2++;
    }
    return result;
}

console.log(mergeSort(listMixed));