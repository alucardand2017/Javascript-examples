//lista
const Personages = [{
  nome: "Gandalf",
  telefone: ["11-6099-9090","11-906050-333"],
  classe: "mago",
  nivel: "20",
  aliado: { nome: "Saruman", classe: "mago"},
  status: "desaparecido"
 }];

//personagem que serão adicionados.
const principalPersonagem = {
    nome: "Anderson",
    profissao:"Marido"
};
const personagem1 = {
  nome: "Vanessa",
  profissao:"Esposa"
};
const personagem2 = {
  nome: "Luigi",
  profissao:"Criança"
};
  Personages.push(principalPersonagem);
  Personages.push(personagem2);
  Personages.push(personagem1);
  console.log(Personages);
