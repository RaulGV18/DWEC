function numerosaleatorios(){
    let num1 = Math.random()
    let num2 = Math.floor((Math.random() * (200 - 100 + 1)) + n2);
    let n1=prompt("deme el numero mas grande");
    let n2=prompt("deme el numero mas pequeño");
    let num3 = Math.floor((Math.random() * (n1 - n2 + 1)) + n2);
    document.write(num1 + " " + num2 + " " + num3);
}
function senocosenotan(){
    let angulo = prompt("introduzca el angulo");
    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tangente= Math.tan(angulo);
    document.write("el seno del angulo es " + seno + " el coseno del angulo es " + coseno + " la tangente del angulo es " + tangente);
}
function hipotenusa(){
    let cateto1= prompt("introduzca el cateto 1");
    let cateto2= prompt("introduzca el cateto 2");
    let hipotenusacuad = Math.pow(cateto1,2) + Math.pow(cateto2,2);
    let hipotenusa= Math.sqrt(hipotenusacuad);
    document.write("<br/>")
    document.write("la hipotenusa es " + hipotenusa)
}

function hipotenusacont(){
        let continuar = true;
        while (continuar){
            let cateto1= prompt("introduzca el cateto 1");
            let cateto2= prompt("introduzca el cateto 2");
            let hipotenusacuad = Math.pow(cateto1,2) + Math.pow(cateto2,2);
            let hipotenusa= Math.sqrt(hipotenusacuad);
            if (cateto1==0 && cateto2==0){
                continuar=false;
            }
            else {
                alert("la hipotenusa es " + hipotenusa);
            }
    }
}
function potencia(){
    let base = prompt("introduzca la base");
    let exponente = prompt("introduzca el exponente");
    let resultado = Math.pow(base,exponente);
    document.write(resultado);
}
function ecuacionsegundogrado(){
    const a = parseInt(prompt('Introduzca el primer coeficiente'));
    const b = parseInt(prompt('Introduzca el segundo coeficiente'));
    const c = parseInt(prompt('Introduzca el tercer coeficiente'));

    const discriminante = Math.sqrt(Math.pow(b,2) - 4 * a * c);

    let res1, res2;

    if(discriminante > 0){
        res1 = parseFloat(((-b + discriminante))/(2*a)).toFixed(2);
        res2 = parseFloat(((-b - discriminante))/(2*a)).toFixed(2);
        document.write('La ecuación de segundo grado tiene dos soluciones: ${res1} y ${res2}');
    } else if (discriminante ===0){
        res1 = -b / (2 * a);
        document.write('La ecuación de segundo grado tiene una solución: ${res1}');
    } else {
        document.write('La ecuación no tiene ninguna solución real');
   }

}

function numeroascendente(){
    let numeroinicial = parseInt(prompt("introduzca el primer numero de la tabla"));
    for (let i=0;i<10;i++){
        document.write("<tr>");
        document.write("<td>" + numeroinicial + "</td>");
        document.write("<td>" +Math.sin(numeroinicial) + "</td>" );
        document.write("</tr>")
        numeroinicial = numeroinicial+5;
    }
}
function imagenrandom(){
    let imagen = Math.floor((Math.random()*3)+1);
    console.log(imagen);
    if (imagen==1){
        document.write("<img src='img/vista-de-playa.jpg'></img>")
    }
    else if (imagen==2){
        document.write("<img src='img/vista-montana-2.jpg'></img>")
    }
    else {
        document.write("<img src='img/vista-montana.jpg'></img>")

    }
}
