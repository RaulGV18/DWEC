function ej1(){
    let numeros = [];
    for (let i=0;i<5;i++){
        let num= prompt("introduce un numero");
        numeros.push(num);
    }
    let min=numeros[0];
    let max=numeros[0];
    let media=0;
    numeros.forEach(element => {
        if (parseInt(element)<min){
            min=parseInt(element);
        }
        if (parseInt(element)>max){
            max=parseInt(element);
        }
        media=media+parseInt(element);
    });
    media=media/5;
    document.write("el numero mas pequeño es " + min + " el numero mas grande es " + max + " la media es " + media);
}
function ej2(){
    let colores = ["azul","amarillo","rojo","verde","cafe","rosa"];
    let color = prompt("introduzca un color para verificar");
    if (colores.includes(color)){
        document.write("el color esta en la array");
    } else {
        document.write("el color no esta en la array");
    }
}
function ej3(){
    let numeros = [];
    for (let i=0;i<20;i++){
        let num = Math.floor(Math.random() * 30) + 1;
        numeros.push(num);
    }
    let nume=prompt("introducir numero para adivinar");
    if (numeros.includes(parseInt(nume))){
        document.write("Enhorabuena ha acertado un numero");
    }
    else {
        document.write("Mas suerte a la proxima");
    }
}
function ej4(){
    let array1 = ["esto", "es", "array","primero"];
    let array2 = ["esto", "es", "la" , "segunda", "array"];
    
    let interseccion = array1.filter(value => array2.includes(value));
    document.write("Intersección: ", interseccion);

    let union = [...new Set([...array1, ...array2])];
    document.write("<br/>");
    document.write("Unión: ", union);
    
    let diferencia = array1.filter(x => !array2.includes(x));
    document.write("<br/>");
    document.write("Diferencia: ", diferencia);
}

function ej5(){
    let numeros = [];
    for (let i=0;i<20;i++){
        let num = Math.floor(Math.random() * 100) + 1;
        numeros.push(num);
    }
    numeros.forEach(element => {
        document.write(element + " ");
    });
    let min=numeros[0];
    let max=numeros[0];
    let media=0;
    numeros.forEach(element => {
        if (parseInt(element)<min){
            min=parseInt(element);
        }
        if (parseInt(element)>max){
            max=parseInt(element);
        }
        media=media+parseInt(element);
    });
    media=media/20;
    document.write("<br/>");
    document.write("el numero mas pequeño es " + min + " el numero mas grande es " + max + " la media es " + media);
}
function ej6(){
    let texto1 = document.createElement("p");
    texto1.innerHTML="texto1";
    document.body.appendChild(texto1);
    document.write("<br/>");
    let texto2 = document.createElement("p");
    texto2.innerHTML="texto2";
    document.body.appendChild(texto2);
    document.write("<br/>");
    let texto3 = document.createElement("p");
    texto3.innerHTML="texto3";
    document.body.appendChild(texto3);
    document.write("<br/>");
    let texto4 = document.createElement("p");
    texto4.innerHTML="texto4";
    document.body.appendChild(texto4);
    document.write("<br/>");
    let parrafos=document.body.innerText;
    let cadena= prompt("introduzca la cadena")
    if (parrafos.includes(cadena)){
        document.write("has acertado una cadena")
    }else {
        document.write("error")
    }
}
function ej7() {
    let numeros = [];
    for (let i=0;i<20;i++){
        let num = Math.floor(Math.random() * 100);
        numeros.push(num);
    }
    numeros.forEach(element => {
        document.write(element+ " ");
    });
    document.write("<br/>");
    let numerosord=numeros.sort(compararnumeros);
    numerosord.forEach(element => {
        document.write(element+ " ");
    });
}
function compararnumeros(n1,n2) {
    return n1-n2;
}
function ej8(){
    let nombres= prompt("introduzca varios nombres separados por coma");
    document.write(nombres);
    nombres= nombres.split(",");
    let nombrord= nombres.sort();
    document.write("<br/>");
    nombrord.forEach(element => {
        document.write(element+",");
    });
    
}
function ej9(){
    let nombres= prompt("introduzca varios nombres separados por coma");
    nombres= nombres.split(",");
    document.write(nombres.length);
    document.write("<br/>");
    document.write(nombres[0]);
    document.write("<br/>");
    document.write(nombres[nombres.length-1]);
    let nombresinvers=[];
    for (let i=1;i<=nombres.length;i++){
        nombresinvers.push(nombres[nombres.length-i]);
    }
    document.write("<br/>");
    document.write(nombresinvers);
    let nombresord=nombres.sort();
    document.write("<br/>");
    document.write(nombresord);
    document.write("<br/>");
    let nombresordrevers=nombres.sort().reverse();
    document.write(nombresordrevers);

}