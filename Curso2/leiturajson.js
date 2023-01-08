const lerjson = require("./cliente.json");
console.log(lerjson);

const clienteString = JSON.stringify(lerjson);
console.log(clienteString);

const clienteObjeto = JSON.parse(clienteString);
console.log(clienteObjeto);
