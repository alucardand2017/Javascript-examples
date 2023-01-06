const autentica = (nome)=> `${nome} realizada com sucesso!`;

const login = (cargo, nome) => {
    if(cargo === "diretoria"){
        console.log( `diretor(ra) ${autentica(nome)}`);
    }
    else if(cargo === "usuario"){
        console.log( `usuario(a) ${autentica(nome)}`);
    }
    else {
        console.log("autenticacao falhou!");
    }
}

login("diretoria", "Anderson");
login("usuario","Vanessa");