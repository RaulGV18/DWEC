function palabralreves() {
  let frase = prompt("introduce una palabra para darle la vuelta");
  let frasealreves = "";
  for (let i = frase.length; i >= 0; i--) {
    frasealreves = frasealreves + frase.charAt(i);
  }
  document.write(frasealreves);
}
function frasesalreves() {
  let frase = prompt("introduce una frase para darle la vuelta");
  let frasealreves = "";
  let frases = frase.split(" ");

  frases.forEach((element) => {
    frasealreves = " ";
    for (let i = element.length; i >= 0; i--) {
      frasealreves = frasealreves + element.charAt(i);
    }
    document.write(frasealreves);
  });
}
function encuentrapalabramaslarga() {
  let frase = prompt("introduce una frase para encontrar la palabra mas larga");
  let palabras = frase.split(" ");
  let palabramaslarga = "";
  let long = 0;
  palabras.forEach((element) => {
    if (element.length > long) {
      long = element.length;
      palabramaslarga = element;
    }
  });
  document.write("<br/>");
  document.write(palabramaslarga);
}
function filtrapalabraslargas() {
  let frase = prompt(
    "introduce una frase para contar las palabras mas largas que longitud"
  );
  let palabras = frase.split(" ");
  let long = prompt("introduzca la longitud de las palabras");
  let cont = 0;
  palabras.forEach((element) => {
    if (element.length > long) {
      cont++;
    }
  });
  document.write("<br/>");
  document.write(cont + " palabras mas largas que " + long);
}
function formateabiencadena() {
  let frase = prompt("introduce una frase para formatearla de manera correcta");
  let palabras = frase.split(" ");
  let fraseform = " ";
  palabras.forEach((element) => {
    let fraseform = " ";
    for (let i = 0; i <= element.length; i++) {
      if (
        element == palabras[0] &&
        element.charAt(i) == palabras[0].charAt(0)
      ) {
        fraseform = fraseform + element.charAt(i).toUpperCase();
      } else {
        fraseform = fraseform + element.charAt(i).toLowerCase();
      }
    }
    document.write(fraseform);
  });
}

function cuentamayusyminus() {
  let frase = prompt("introduce una frase para formatearla de manera correcta");
  let palabras = frase.split(" ");
  let contminus = 0;
  let contmayus = 0;
  let cont = 0;
  palabras.forEach((element) => {
    for (let i = 0; i <= element.length; i++) {
      cont++;
      console.log(element.charAt(i));
      if (element.charAt(i) == "") {
        cont--;
      } else if (element.charAt(i) == element.charAt(i).toLowerCase()) {
        contminus++;
      } else if (element.charAt(i) == element.charAt(i).toUpperCase()) {
        contmayus++;
      }
    }
  });
  if (contmayus == cont) {
    document.write("la frase es entera en mayusculas");
  } else if (contminus == cont) {
    document.write("la frase es entera en minusculas");
  } else {
    document.write("la frase es una mezcla");
  }
}

function subcadena() {
  cadena = prompt("introduzca la cadena");
  let subcad = prompt("introduzca la subcadena que quiere buscar en la cadena");
  let cont = 0;
  let j = 0;
  for (let i = subcad.length; i <= cadena.length; i++) {
    comp = cadena.substring(j, i);
    j++;
    if (subcad == comp) {
      cont++;
    }
  }
  return cont;
}

function consonantesyvocales() {
  let cadena = prompt("introduzca la cadena");
  let consonantes = [];
  let vocales = [];
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena.charAt(i) == "a" ||
      cadena.charAt(i) == "o" ||
      cadena.charAt(i) == "e" ||
      cadena.charAt(i) == "i" ||
      cadena.charAt(i) == "u"
    ) {
      vocales.push(cadena.charAt(i));
    } else {
      consonantes.push(cadena.charAt(i));
    }
  }
  let mezcla = consonantes + vocales;
  return mezcla;
}
function eliminarepe() {
  let cadena = prompt("introduzca la cadena");
  let cad2 = "";
  for (i = 0; i <= cadena.length; i++) {
    if (cadena.charAt(i) != cadena.charAt(i + 1)) {
      cad2 = cad2 + cadena.charAt(i);
    }
  }
  return cad2;
}
function subcad2() {
  cadena = prompt("introduzca la cadena");
  let subcad = prompt("introduzca la subcadena que quiere buscar en la cadena");
  let cont = 0;
  let j = 0;
  let essubcad = false;
  for (let i = subcad.length; i <= cadena.length; i++) {
    comp = cadena.substring(j, i);
    j++;
    if (subcad == comp) {
      essubcad = true;
      cont = j;
    }
  }
  if (essubcad) {
    document.write("si es una subcadena y empieza en el valor " + cont);
  }
}
function espalindromo() {
  let cadena = prompt("introduzca la palabra");
  let j = cadena.length - 1;
  let cont = 0;
  console.log(cadena.length);
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == cadena.charAt(j)) {
      cont++;
    }
    console.log(cadena.charAt(j));
    j--;
  }
  if (cont == cadena.length) {
    document.write("Es palindromo");
  } else {
    document.write("no es palindromo");
  }
}
function contarpal() {
  let cadena = prompt("introduzca la cadena a contar");
  cadena = cadena.trim();
  cadena = cadena.replace(/\s+/g, " ");
  return cadena.split(" ").length;
}
function validartarjeta() {
  let digitos = 0;
  let tarjetacred = prompt("introduzca la tarjeta de credito");
  if (isNaN(tarjetacred)) {
    document.write("su tarjeta de credito no es valida");
  } else {
    if (tarjetacred.length == 16) {
      if (tarjetacred.charAt(tarjetacred.length) % 2 == 0) {
        let suma = 0;
        for (let i = 0; i < tarjetacred.length; i++) {
          suma = suma + parseInt(tarjetacred.charAt(i));
          if (tarjetacred.charAt(i) != tarjetacred.charAt(i + 1)) {
            digitos++;
          }
        }
        if (suma > 16 && digitos > 1) {
          document.write("Su tarjeta de credito es valida");
        } else {
          document.write("su tarjeta de credito no es valida");
        }
      } else {
        document.write("su tarjeta de credito no es valida");
      }
    } else {
      document.write("su tarjeta de credito no es valida");
    }
  }
}
function validartarjeta2() {
    let digitos = 0;
    let tarjetacred = prompt("introduzca la tarjeta de credito");
    tarjetacred = tarjetacred.replaceAll("-", "")
    if (isNaN(tarjetacred)) {
      document.write("su tarjeta de credito no es valida");
    } else {
      if (tarjetacred.length == 16) {
        if (tarjetacred.charAt(tarjetacred.length) % 2 == 0) {
          let suma = 0;
          for (let i = 0; i < tarjetacred.length; i++) {
            suma = suma + parseInt(tarjetacred.charAt(i));
            if (tarjetacred.charAt(i) != tarjetacred.charAt(i + 1)) {
              digitos++;
            }
          }
          if (suma > 16 && digitos > 1) {
            document.write("Su tarjeta de credito es valida");
          } else {
            document.write("su tarjeta de credito no es valida");
          }
        } else {
          document.write("su tarjeta de credito no es valida");
        }
      } else {
        document.write("su tarjeta de credito no es valida");
      }
    }
  }