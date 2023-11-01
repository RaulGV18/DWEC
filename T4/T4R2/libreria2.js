let i=16;

function aumentartamaño() {
    let ps = document.getElementsByTagName("p");
    for (let j=0; j<ps.length; j++){
        i++;
        ps[j].style.fontSize = i+"px";
    } 
}
function disminuirtamaño() {
    let ps = document.getElementsByTagName("p");
    for (let j=0; j<ps.length; j++){
        i--;
        ps[j].style.fontSize = i+"px";
    } 
}
let alineacion="izquierda";
function cambiaralineacion() {
    let ps = document.getElementsByTagName("p");
    if (alineacion==="izquierda"){
        alineacion="justificada";
        for (let j=0; j<ps.length; j++){
            ps[j].style.textAlign = "justify";
        } 
    }
    else if (alineacion === "justificada") {
        alineacion="izquierda";
        for (let j=0; j<ps.length; j++){
            ps[j].style.textAlign = "left";
        } 
    }
}