function validaExpresionRegular(scadena, sexpresion) {
  const expR = new RegExp(sexpresion);
  return expR.test(scadena);
}
document.addEventListener("DOMContentLoaded", function () {
  let nombre = document.getElementById("nombre");
  let apellidos = document.getElementById("apellidos");
  let dni = document.getElementById("dni");
  let telefono = document.getElementById("telefono");
  let email = document.getElementById("email");
  let nomusu = document.getElementById("nomusu");
  let nombband = false;
  let apellidband = false;
  let dniband = false;
  let telefband = false;
  let emailband = false;
  let nomusuband = false;
  let botonhab = false;

  nombre.onblur = function () {
    let expr = "^[A-za-z]+$";
    let nom = validaExpresionRegular(nombre.value, expr);
    if (nom) {
      let conf = document.getElementById("nom");
      conf.innerText="El nombre es correcto";
      nombband = true;
    } else {
        let conf = document.getElementById("nom");
      conf.innerText="El nombre es incorrecto";
      nombband = false;
    }
    if (
      nombband == true &&
      apellidband == true &&
      dniband == true &&
      telefband == true &&
      emailband == true &&
      nomusuband == true
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
  apellidos.onblur = function () {
    let expr = "^[A-za-z]+$";
    let nom = validaExpresionRegular(apellidos.value, expr);
    if (nom) {
        let conf = document.getElementById("ape");
      conf.innerText="El apellido es correcto";
      apellidband = true;
    } else {
        let conf = document.getElementById("ape")
      conf.innerText="El apellido es incorrecto";
      apellidband = false;
    }
    if (
      nombband == true &&
      apellidband == true &&
      dniband == true &&
      telefband == true &&
      emailband == true &&
      nomusuband == true
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
  dni.onblur = function () {
    let expr = "^[0-9]{8}[A-Z]{1}$";
    let nom = validaExpresionRegular(dni.value, expr);
    if (nom) {
        let conf = document.getElementById("dn");
      conf.innerText="El dni es correcto";
      dniband = true;
    } else {
        let conf = document.getElementById("dn")
      conf.innerText="El dni es incorrecto";
      dniband = false;
    }
    if (
      nombband == true &&
      apellidband == true &&
      dniband == true &&
      telefband == true &&
      emailband == true &&
      nomusuband == true
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
  telefono.onblur = function () {
    let expr = "^[0-9]{9}$";
    let nom = validaExpresionRegular(telefono.value, expr);
    if (nom) {
        let conf = document.getElementById("tel");
      conf.innerText="El telefono es correcto";
      telefband = true;
    } else {
        let conf = document.getElementById("tel")
      conf.innerText="El telefono es incorrecto";
      telefband = false;
    }
    if (
      nombband == true &&
      apellidband == true &&
      dniband == true &&
      telefband == true &&
      emailband == true &&
      nomusuband == true
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
  email.onblur = function () {
    let expr = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}";
    let nom = validaExpresionRegular(email.value, expr);
    if (nom) {
        let conf = document.getElementById("ema");
      conf.innerText="El correo es correcto";
      emailband = true;
    } else {
        let conf = document.getElementById("ema")
      conf.innerText="El correo es incorrecto";
      emailband = false;
    }
    if (
      nombband == true &&
      apellidband == true &&
      dniband == true &&
      telefband == true &&
      emailband == true &&
      nomusuband == true
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
  nomusu.onblur = function () {
    let expr = "^(?=.*\d)(?=.*[.,;:]).{8,}$";
    let nom = validaExpresionRegular(nomusu.value, expr);
    if (nom) {
        let conf = document.getElementById("nomu");
      conf.innerText="El nombre de usuario es correcto";
      nomusuband = true;
    } else {
        let conf = document.getElementById("nomu")
      conf.innerText="El nombre de usuario es incorrecto";
      nomusuband = false;
    }
    if (
      nombband == true &&
      apellidband == true &&
      dniband == true &&
      telefband == true &&
      emailband == true &&
      nomusuband == true
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
