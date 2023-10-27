function ej1() {
  let ventanaSecundaria;
  let nombre = prompt("Por favor, escribe un título para la página:");
  ventanaSecundaria = window.open(
    "",
    "",
    "width=500,height=400,top=0,left=1200"
  );
  ventanaSecundaria.document.write("<h1>" + nombre + "</h1>");

  let btnCerrar = document.createElement("button");
  btnCerrar.textContent = "Cerrar ventana";
  document.body.appendChild(btnCerrar);

  btnCerrar.addEventListener("click", function () {
    if (ventanaSecundaria) {
      ventanaSecundaria.close();
    }
  });
}
function ej2() {
  let ventanaSecundaria;
  let btnabrir = document.createElement("button");
  btnabrir.textContent = "abrir ventana";
  document.body.appendChild(btnabrir);

  let btnCerrar = document.createElement("button");
  btnCerrar.textContent = "Cerrar ventana";
  document.body.appendChild(btnCerrar);

  btnCerrar.addEventListener("click", function () {
    if (ventanaSecundaria) {
      ventanaSecundaria.close();
    }
  });
  btnabrir.addEventListener("click", function () {
    if (!ventanaSecundaria) {
      let nombre = prompt("Por favor, escribe un título para la página:");
      ventanaSecundaria = window.open(
        "",
        "",
        "width=500,height=400,top=0,left=1200"
      );
      ventanaSecundaria.document.write("<h1>" + nombre + "</h1>");
      ventanaSecundaria.document.write('<input type="button" value="cerrar ventana" id="cerrar">');

    let cerrarEsta;
    cerrarEsta=ventanaSecundaria.document.getElementById("cerrar");
    cerrarEsta.onclick=function(){
        ventanaSecundaria.close();
    }

let cerrarVentana;
cerrarVentana=document.getElementById("cerrarSecundaria");
cerrarVentana.onclick=function(){
    ventanaSecundaria.close();
}
    }
  });
}

function ej3(){
    let texto = document.createElement("a");
    texto.innerHTML="Haz clic aqui";
    document.body.appendChild(texto);
    let ventanaSecundaria1;
    let ventanaSecundaria2;
    let ventanaSecundaria3;
    let ventanaSecundaria4;
    let ventanaSecundaria5;
    texto.addEventListener("click", function(){
        ventanaSecundaria1 = window.open(
          "",
          "",
          "width=350,height=350,top=0,left=1200"
        );
        ventanaSecundaria1.document.write("<h1>" + "ventana1" + "</h1>");
        ventanaSecundaria1.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
        ventanaSecundaria2 = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundaria2.document.write("<h1>" + "ventana2" + "</h1>");
          ventanaSecundaria2.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
          ventanaSecundaria3 = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundaria3.document.write("<h1>" + "ventana3" + "</h1>");
          ventanaSecundaria3.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
          ventanaSecundaria4 = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundaria4.document.write("<h1>" + "ventana4" + "</h1>");
          ventanaSecundaria4.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
          ventanaSecundaria5 = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundaria5.document.write("<h1>" + "ventana5" + "</h1>");
          ventanaSecundaria5.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
  
      let cerrarEsta1;
      let cerrarEsta2;
      let cerrarEsta3;
      let cerrarEsta4;
      let cerrarEsta5;
      cerrarEsta1=ventanaSecundaria1.document.getElementById("cerrar");
      cerrarEsta1.onclick=function(){
          ventanaSecundaria1.close();
      }
      cerrarEsta2=ventanaSecundaria2.document.getElementById("cerrar");
      cerrarEsta2.onclick=function(){
          ventanaSecundaria2.close();
      }
      cerrarEsta3=ventanaSecundaria3.document.getElementById("cerrar");
      cerrarEsta3.onclick=function(){
          ventanaSecundaria3.close();
      }
      cerrarEsta4=ventanaSecundaria4.document.getElementById("cerrar");
      cerrarEsta4.onclick=function(){
          ventanaSecundaria4.close();
      }
      cerrarEsta5=ventanaSecundaria5.document.getElementById("cerrar");
      cerrarEsta5.onclick=function(){
          ventanaSecundaria5.close();
      }
      
    })

}

function ej4(saltos){
        document.writeln("<br>")
        document.writeln(saltos)  
        saltos--
        if (saltos>0)
            setTimeout(ej4,1000,saltos)
        else {
            window.location.replace("https://www.pccomponentes.com")
        }
    }
function ej5(){
  let ventanaSecundaria;
  let btnabrir = document.createElement("button");
  btnabrir.textContent = "abrir ventana";
  document.body.appendChild(btnabrir);

  let btnCerrar = document.createElement("button");
  btnCerrar.textContent = "Cerrar ventana";
  document.body.appendChild(btnCerrar);
  let btnTexto = document.createElement("button");
  btnTexto.textContent = "Mensaje ventana secundaria";
  document.body.appendChild(btnTexto);
  btnTexto.addEventListener("click", function(){
    ventanaSecundaria.document.write("<p>Mensaje desde la ventana principal<p/>")
  });

  btnCerrar.addEventListener("click", function () {
    if (ventanaSecundaria) {
      ventanaSecundaria.close();
    }
  });
  
  btnabrir.addEventListener("click", function () {
    if (!ventanaSecundaria) {
      let nombre = prompt("Por favor, escribe un título para la página:");
      ventanaSecundaria = window.open(
        "",
        "",
        "width=500,height=400,top=0,left=1200"
      );
      ventanaSecundaria.document.write("<h1>" + nombre + "</h1>");
      ventanaSecundaria.document.write('<input type="button" value="cerrar ventana" id="cerrar">');

    let cerrarEsta;
    cerrarEsta=ventanaSecundaria.document.getElementById("cerrar");
    cerrarEsta.onclick=function(){
        ventanaSecundaria.close();
    }

let cerrarVentana;
cerrarVentana=document.getElementById("cerrarSecundaria");
cerrarVentana.onclick=function(){
    ventanaSecundaria.close();
}
    }
  });
}