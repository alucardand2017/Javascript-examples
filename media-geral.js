const mediaCSharp = [10.0, 6.0, 8.0, 5.0, 8.0];
const mediaJava = [7.0, 8.0, 8.0, 6.0, 6.0];
const mediaJS = [8.5, 6.5, 7.0, 7.5, 6.0];


function chamada(array){
    const media = array.reduce((acumulador, nota) => acumulador+nota, 0);
    console.log(`${(media/array.length)}`);
}

chamada(mediaCSharp);
chamada(mediaJava);
chamada(mediaJS);

