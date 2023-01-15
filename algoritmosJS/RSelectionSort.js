const livros = require("./listaLivros");
const RmenorValor = require("./RmenorValor");


for(let atual = 0 ; atual < livros.length-1 ; atual++){
    
    const menor =  RmenorValor(livros, atual);
    
    let livroAtual = livros[atual];
    let livroMenor = livros[menor];

    livros[atual] = livroMenor;
    livros[menor] = livroAtual; 
}

console.log(livros);