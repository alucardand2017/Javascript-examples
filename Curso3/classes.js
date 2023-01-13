class Livro{
    constructor (nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    
    anunciarTitulo(){
        console.log("Titulo: " + this.nome);
    }
    anunciarEditora(){
        console.log("Editora: " +this.editora);
    }
}

class Quadrinho extends Livro{
    constructor(nome, editora,paginas, autor){
        super(nome, editora, paginas);
        this.autor = autor;
    }
}
const l2 = new Livro("As aventuras de Pi", "Pi", 314);
console.log(l2.nome);
console.log(l2.editora);
console.log(l2.paginas);
l2.anunciarEditora();
l2.anunciarTitulo();
console.log(typeof l2);

const q1 = new Quadrinho("Turma da Monica", "Mauricinho",150, "Mauricio de Sousa");
console.log(q1.nome);
console.log(q1.editora);
console.log(q1.paginas);
q1.anunciarEditora();
q1.anunciarTitulo();
console.log(typeof q1);