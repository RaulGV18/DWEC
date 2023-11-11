function validaExpresionRegular(scadena, sexpresion) {
    const expR = new RegExp(sexpresion);
    return expR.test(scadena);
  }
  document.addEventListener("DOMContentLoaded", function () {
    let nombre = document.getElementById("fname");
    let apellidos = document.getElementById("apellidos");
    let terms = document.getElementById("terms");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
    let cpass= document.getElementById("cpassword");
    let nombband = false;
    let apellidband = false;
    let termsband = false;
    let telefband = false;
    let emailband = false;
    let passband = false;
    let cpassband= false;
    let botonhab = false;
  
    nombre.onblur = function () {
      let expr = "^[A-za-z]+$";
      let nom = validaExpresionRegular(nombre.value, expr);
      if (nom) {
        nombband = true;
        nombre.style.borderColor = "black"
      } else {
        nombre.style.borderColor = "red"
        nombband = false;
      }
      if (
        nombband == true &&
        apellidband == true &&
        termsband == true &&
        telefband == true &&
        emailband == true &&
        passband == true &&
        cpassband == true
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
        apellidos.style.borderColor = "black"
        apellidband = true;
      } else {
        apellidos.style.borderColor = "red"
        apellidband = false;
      }
      if (
        nombband == true &&
        apellidband == true &&
        termsband == true &&
        telefband == true &&
        emailband == true &&
        passband == true &&
        cpassband == true
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
    terms.onclick = function () {
      if (terms.value) {
        termsband = true;
      } else {
        termsband = false;
      }
      if (
        nombband == true &&
        apellidband == true &&
        termsband == true &&
        telefband == true &&
        emailband == true &&
        passband == true &&
        cpassband == true
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
        telefono.style.borderColor = "black"
        telefband = true;
      } else {
        telefono.style.borderColor = "red"
        telefband = false;
      }
      if (
        nombband == true &&
        apellidband == true &&
        termsband == true &&
        telefband == true &&
        emailband == true &&
        passband == true &&
        cpassband == true
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
        email.style.borderColor = "black"
        emailband = true;
      } else {
        email.style.borderColor = "red"
        emailband = false;
      }
      if (
        nombband == true &&
        apellidband == true &&
        termsband == true &&
        telefband == true &&
        emailband == true &&
        passband == true &&
        cpassband == true
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
    pass.onblur = function () {
      let expr = "^(?=.*\d).{8,}$";
      let nom = validaExpresionRegular(pass.value, expr);
      if (nom) {
        pass.style.borderColor = "black"
        passband = true;
      } else {
        pass.style.borderColor = "red"
        passband = false;
      }
      if (
        nombband == true &&
        apellidband == true &&
        termsband == true &&
        telefband == true &&
        emailband == true &&
        passband == true &&
        cpassband == true
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
    cpass.onblur = function () {
        let expr = "^(?=.*\d).{8,}$";
        let nom = validaExpresionRegular(cpass.value, expr);
        if (nom && cpass.value == pass.value) {
          cpass.style.borderColor = "black"
          cpassband = true;
        } else {
          cpass.style.borderColor = "red"
          cpassband = false;
        }
        if (
          nombband == true &&
          apellidband == true &&
          termsband == true &&
          telefband == true &&
          emailband == true &&
          passband == true &&
          cpassband == true
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
  