function ej1(n1,n2,n3,n4){
    let max=n1;
    for (let i = 0;i<4;i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
function ej2(){
    let resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
}
function ej3(){
    let cont1=0;
    let cont2=0;
    let cont3=0;
    let cont4=0;
    let cont5=0;
    let cont6=0;
    for (let i = 0; i<=6000;i++){
        let resultado = Math.floor(Math.random() * 6) + 1;
        if (resultado == 1){
            cont1++;
        }
        if (resultado == 2){
            cont2++;
        }
        if (resultado == 3){
            cont3++;
        }
        if (resultado == 4){
            cont4++;
        }
        if (resultado == 5){
            cont5++;
        }
        if (resultado == 6){
            cont6++;
        }
    }
    
    document.write("un total de " + cont1 + " unos " + cont2 + " doses " + cont3 + " tres " + cont4 + " cuatros " + cont5 + " cincos " + cont6 + " seis ")
}
function ej4(radio) {
    let volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    return volumen;
}
function ej5(radio) {
    let volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    let area = Math.PI * Math.pow(radio, 2);
    document.write("el volumen es " + volumen + " el area es " + area);
}
function ej6(base,exponente){
    if (exponente === 0) {
        return 1;
      } else {
        return base * ej6(base, exponente - 1);
      }    
}
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
  
function ej7() {
  let tabla = document.getElementById("tablaFactoriales");
  tabla.innerHTML = "";

  let fila = tabla.insertRow();
  fila.insertCell().innerHTML = "<b>Numero</b>";
  fila.insertCell().innerHTML = "<b>Factorial</b>";

  for (let i = 1; i <= 10; i++) {
    let fila = tabla.insertRow();
    fila.insertCell().innerHTML = i;
    fila.insertCell().innerHTML = factorial(i);
  }
}