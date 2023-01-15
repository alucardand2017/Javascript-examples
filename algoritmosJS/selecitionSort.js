const livros = require('./listaLivros');
const menorValor = require('./menorValor');


for(let atual = 0 ; atual < livros.length ; atual++){
    let menor = menorValor(livros, atual);
    
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    
    console.log("posicao atual: " + atual);
    livros[atual] = livroMenorPreco;
    
    console.log("livro Atual : " + livros[atual].titulo);
    livros[menor] = livroAtual;
    
    console.log("livro menor preco: " + livros[menor].preco);
}

console.log(livros);