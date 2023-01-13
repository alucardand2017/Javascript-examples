const livro = {
    nome: "O vento Levou",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function(){
        console.log("Indicamos o livro " + this.nome);
    }
}
function novoLivro(_nome, _editora, _paginas){
    gNome = _nome;
    gEditora = _editora;
    gPagina = _paginas;
    this.gNome = getNome = function (){
        return gNome;
    }
    this.gEditora = getEditora = function(){
        return gEditora;
    }
    this.gPagina = getPagina = function(){
        return gPagina;
    }
}
//a mesma coisa
//const l1 = new novoLivro("CSharp", "Alura", 180);
//console.log(l1.gNome(), l1.gEditora(), l1.gPagina());
//const lx = new String("Ola");
//console.log(lx.toString());
//const ly = "Ola";
//console.log(ly.toString());
//#####################################################
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

const l2 = new Livro("As aventuras de Pi", "Pi", 314);
console.log(l2.nome);
console.log(l2.editora);
console.log(l2.paginas);
l2.anunciarEditora();
l2.anunciarTitulo();

console.log(typeof Livro);
