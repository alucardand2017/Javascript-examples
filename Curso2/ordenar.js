const clientes = require("./clientes.json");

function ordenar(list, property){
    const order = list.sort((a,b) => {
        if(a[property] < b[property])
            return -1
        else if(a[property] > b[property])
            return 1;
        else
            return 0;
    });
    return order;
}

const listaOrdenada = ordenar(clientes, "nome");

console.log(listaOrdenada);