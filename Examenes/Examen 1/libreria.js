function enconcontrarpalabras(texto,texto2,palabra){
    let palabras = texto.split(" ");
    let cont=0;
    for (let i=0;i<palabras.length;i++){
        if (palabras[i].toLowerCase()==palabra.toLowerCase()){
            cont++;
        }
    }
    palabras = texto2.split(" ");
    for (let i=0;i<palabras.length;i++){
        if (palabras[i].toLowerCase()==palabra.toLowerCase()){
            cont++;
        }
    }
    return cont;
}