function compfechas(fecha1, fecha2) {
  let diferencia = fecha2 - fecha1;
  return diferencia;
}
function cumpledomin(fechanac) {
  let fecha = new Date(fechanac);
  let cont = 0;
  let año = fecha.getFullYear();
  for (año; año < 2100; año++) {
    fecha.setFullYear(año);
    let a = fecha.getDay;
    if (fecha.getDay() === 0) {
      cont++;
    }
  }
  return cont;
}
function hora() {
  let fechact = new Date(Date.now());
  document.write(
    fechact.getHours() + ":" + fechact.getMinutes() + ":" + fechact.getSeconds()
  );
  document.write(
    "son las " + fechact.getHours() + "h y " + fechact.getMinutes() + "m"
  );
}
function nombreyapellidos() {
  let minact = new Date(Date.now());
  let nombre = prompt("introduzca nombre y apellidos");
  if (nombre != null) {
    let minterm = new Date(Date.now());
    let diferencia = minterm.getSeconds() - minact.getSeconds();
    document.write(
      "has tardado " + diferencia + " segundos en introducir " + nombre
    );
  }
}
function operaciones(cadena) {
  if ((cadena == "potencia")) {
    let base = prompt("introduzca la base");
    let exponente = prompt("introduzca el exponente");
    let resultado = Math.pow(base, exponente);
    return resultado;
  } else if ((cadena == "raiz")) {
    let numero = prompt("introduzca el numero a hacer raiz")
    if (numero>0){
      let resultado= Math.sqrt(numero);
      return resultado;
    }
    else {
      document.write("numero negativo");
      return "";
    }
    
  } else if ((cadena == "redondeo")) {
    let numero = prompt("introduzca el numero a redondear")
    let resultado=Math.round(numero);
    return resultado;
  } else if ((cadena == "trigonometria")) {
    let angulo = prompt("introduzca el angulo");
    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tangente= Math.tan(angulo);
    document.write("el seno del angulo es " + seno + " el coseno del angulo es " + coseno + " la tangente del angulo es " + tangente);
    return "";
  } else {
    alert("error");
  }
}
function nombreyape(cadena){
  console.log(cadena.length);
  console.log(cadena.toLowerCase());
  console.log(cadena.toUpperCase());
  let array1 = cadena.split(" ");
  array1.forEach(element => {
    console.log(element);
  });
}
function ordennumeros(...numeros){
  let max=numeros[0];
  for (let i=1;i<numeros.length;i++){
    if (max<numeros[i]) {
      max=numeros[i];
    }
  }
  return max;
}
function numeroas(){
  let cont=0;
  let frase = prompt("introduce una frase para contar las as")
  for (i=0;i<frase.length;i++){
    if (frase.charAt(i)=="a"){
      cont++;
    }
  }
  return cont;
}
function numerovocales(){
  let cont=0;
  let frase = prompt("introduce una frase para contar las vocales")
  for (i=0;i<frase.length;i++){
    if (frase.charAt(i)=="a"||frase.charAt(i)=="o"||frase.charAt(i)=="e"||frase.charAt(i)=="i"||frase.charAt(i)=="u"){
      cont++;
    }
  }
  return cont;
}

function numerovocalessep(){
  let contA=0;
  let contE=0;
  let contI=0;
  let contO=0;
  let contU=0;
  let frase = prompt("introduce una frase para contar las vocales")
  for (i=0;i<frase.length;i++){
    if (frase.charAt(i)=="a"){
      contA++;
    } else if (frase.charAt(i)=="o"){
      contO++;
    } else if (frase.charAt(i)=="e"){
      contE++;
    } else if (frase.charAt(i)=="i") {
      contI++;
    } else if (frase.charAt(i)=="u") {
      contU++
    }
  }
  document.write("A: " + contA + " O: " + contO + " e: " + contE + " i: " + contI + " u: " + contU);
}

function palabralreves(){
  let frase = prompt("introduce una frase para contar las as");
  let frasealreves ="";
  for (let i=frase.length;i>=0;i--){
    frasealreves = frasealreves + frase.charAt(i);
  }
  document.write(frasealreves);
}

