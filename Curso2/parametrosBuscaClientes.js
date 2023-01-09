const clientes = require("./clientes.json");

function ApartmentWhitoutComplement(clientes){
    return clientes.filter((cliente) => cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
}

const clientesSemComplemento = ApartmentWhitoutComplement(clientes);
console.log(clientesSemComplemento);



//console.log(clientes);
//function encontrar(lista, chave, valor){
    //return lista.find((item) => item[chave] === valor); //pesquisa mais simples
//    return lista.find((item) => item[chave].includes(valor)); //pesquisa mais abrangente
//}
//console.log(encontrar(clientes,"nome", "Kirby"));
//console.log(encontrar(clientes,"telefone","9916828153"));
