const pessoa = {
    nome: "Anderson",
    profissao:"VARIG"
};
const objPersonagem = {
    nome: "Gandalf",
    telefone: ["11-6099-9090","11-906050-333"],
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }


   console.log(objPersonagem);
   delete objPersonagem.aliado;
   objPersonagem.amigo = pessoa;
   console.log(objPersonagem);
