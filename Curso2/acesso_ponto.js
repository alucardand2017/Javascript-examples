const cliente = {
    nome: "André",
    idade: "32",
    cpf: "33333333333",
    email: "andre@gmail.com"
}

console.log(`O nome do cliente é ${cliente.nome}, sua idade é ${cliente.idade}, com CPF número ${cliente.cpf} e email ${cliente.email}`); //uma forma de acesso
console.log(`O nome do cliente é ${cliente["nome"]}, sua idade é ${cliente["idade"]}, com CPF número ${cliente["cpf"]} e email ${cliente["email"]}`); // outra forma de acesso.

const chaves = ["nome", "idade","cpf", "email", "altura"];

chaves.forEach((key) => {
    console.log(`A chave "${key}" tem valor "${cliente[key]}"`);    //por fim, outra forma de acesso
})