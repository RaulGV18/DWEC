function validaExpresionRegular(scadena, sexpresion) {
    const expR = new RegExp(sexpresion);
    return expR.test(scadena);
  }
  document.addEventListener("DOMContentLoaded", function () {
    let numtarj = document.getElementById("cardnumber");
    let dueño = document.getElementById("cardholder");
    let cvv = document.getElementById("cvv");
    let numtarjband = false;
    let dueñoband = false;
    let cvvband = false;
  
    numtarj.onblur = function () {
      let expr = "^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$";
      let nom = validaExpresionRegular(numtarj.value, expr);
      if (nom) {
        numtarjband = true;
        numtarj.style.borderColor = "black"
      } else {
        numtarj.style.borderColor = "red"
        numtarjband = false;
      }
      if (
        numtarjband == true &&
        dueñoband == true &&
        cvvband == true
      ) {
        botonhab = true;
      } else {
        botonhab = false;
      }
      if (botonhab) {
        let boton = document.getElementById("boton");
        boton.disabled = false;
      }
    };
    dueño.onblur = function () {
        let expr = "^[A-za-z]+$";
        let nom = validaExpresionRegular(dueño.value, expr);
        if (nom) {
          dueñoband = true;
          dueño.style.borderColor = "black"
        } else {
            dueño.style.borderColor = "red"
            dueñoband = false;
        }
        if (
          numtarjband == true &&
          dueñoband == true &&
          cvvband == true
        ) {
          botonhab = true;
        } else {
          botonhab = false;
        }
        if (botonhab) {
          let boton = document.getElementById("boton");
          boton.disabled = false;
        }
      };
      cvv.onblur = function () {
        let expr = "^[0-9]{3}$";
        let nom = validaExpresionRegular(cvv.value, expr);
        if (nom) {
            cvvband = true;
            cvv.style.borderColor = "black"
        } else {
            cvv.style.borderColor = "red"
            cvvband = false;
        }
        if (
          numtarjband == true &&
          dueñoband == true &&
          cvvband == true
        ) {
          botonhab = true;
        } else {
          botonhab = false;
        }
        if (botonhab) {
          let boton = document.getElementById("boton");
          boton.disabled = false;
        }
      };
  });