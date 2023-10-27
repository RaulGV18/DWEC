function ej3(){
    let texto1 = document.createElement("a");
    texto1.innerHTML="Haz clic aqui 1";
    document.body.appendChild(texto1);
    document.write("<br/>")
    let texto2 = document.createElement("a");
    texto2.innerHTML="Haz clic aqui 2";
    document.body.appendChild(texto2);
    document.write("<br/>")
    let texto3 = document.createElement("a");
    texto3.innerHTML="Haz clic aqui 3";
    document.body.appendChild(texto3);
    document.write("<br/>")
    let texto4 = document.createElement("a");
    texto4.innerHTML="Haz clic aqui 4";
    document.body.appendChild(texto4);
    document.write("<br/>")
    let texto5 = document.createElement("a");
    texto5.innerHTML="Haz clic aqui 5";
    document.body.appendChild(texto5);
    document.write("<br/>")
    let texto6 = document.createElement("a");
    texto6.innerHTML="Haz clic aqui 6";
    document.body.appendChild(texto6);
    document.write("<br/>")
    let texto7 = document.createElement("a");
    texto7.innerHTML="Haz clic aqui 7";
    document.body.appendChild(texto7);
    document.write("<br/>")
    let texto8 = document.createElement("a");
    texto8.innerHTML="Haz clic aqui 8";
    document.body.appendChild(texto8);
    document.write("<br/>")
    let texto9 = document.createElement("a");
    texto9.innerHTML="Haz clic aqui 9";
    document.body.appendChild(texto9);
    let ventanaSecundariaA;
    let ventanaSecundariaB;
    let ventanaSecundariaD;
    let ventanaSecundariaE;
    texto1.addEventListener("click", function(){
        ventanaSecundariaA = window.open(
          "",
          "",
          "width=350,height=350,top=0,left=1200"
        );
        ventanaSecundariaA.document.write("<h1>" + texto1 + "</h1>");
        ventanaSecundariaA.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
    });
    texto2.addEventListener("click",function(){
        ventanaSecundariaB = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundariaB.document.write("<h1>" + texto2 + "</h1>");
          ventanaSecundariaB.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
          cerrarEsta2=ventanaSecundariaB.document.getElementById("cerrar");
          cerrarEsta2.onclick=function(){
              ventanaSecundariaB.close();
          }
    })
    texto3.addEventListener("click",function(){
        textonuevo=prompt("introduzca el titulo de la ventana");
        ventanaSecundariaD = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundariaD.document.write("<h1>" + textonuevo + "</h1>");
          ventanaSecundariaD.document.write('<input type="button" value="cerrar ventana" id="cerrar">');
    });
    texto4.addEventListener("click",function(){
        self0.close();
    });
    texto5.addEventListener("click",function(){
        ventanaSecundariaD = window.open(
            "",
            "",
            "width=350,height=350,top=0,left=1200"
          );
          ventanaSecundariaD.close();
    });
    texto6.addEventListener("click",function(){
        ventanaSecundariaE = window.open(
            "",
            "",
            "width=300,height=100,top=0,left=1200"
          );
          ventanaSecundariaE.document.write('<input type="button" id="añadirtexto">');
          btnTexto=ventanaSecundariaE.document.getElementById("añadirtexto");
          btnTexto.addEventListener("click", function(){
            document.write("<p>Mensaje desde la ventana secundaria<p/>")
          });
    });
    texto7.addEventListener("click",function(){
        ventanaSecundariaE.moveTo(-50,50);
    });
    texto8.addEventListener("click",function(){
        window.scrollBy(0,10)
    })
    texto9.addEventListener("click",function(){
        window.scrollBy(20,400)
    })

}
function ej6(){
    let texto1 = document.createElement("a");
    texto1.innerHTML="Haz clic aqui 1";
    document.body.appendChild(texto1);
    document.write("<br/>")
    texto1.addEventListener("click",function(){
        alert(window.location.hostname)
    })
    let texto2 = document.createElement("a");
    texto2.innerHTML="Haz clic aqui 2";
    document.body.appendChild(texto2);
    document.write("<br/>")
    texto2.addEventListener("click",function(){
        alert(window.location.href)
    })
    let texto3 = document.createElement("a");
    texto3.innerHTML="Haz clic aqui 3";
    document.body.appendChild(texto3);
    document.write("<br/>")
    texto3.addEventListener("click",function(){
        var url = prompt('Por favor, introduce una dirección web:');
        window.location.href = url;
    })
    let texto4 = document.createElement("a");
    texto4.innerHTML="Haz clic aqui 4";
    document.body.appendChild(texto4);
    document.write("<br/>")
    texto4.addEventListener("click",function(){
        document.write(window.location.protocol);
    })
    let texto5 = document.createElement("a");
    texto5.innerHTML="Haz clic aqui 5";
    document.body.appendChild(texto5);
    document.write("<br/>")
    texto5.addEventListener("click",function(e){
        e.preventDefault();
        location.reload();
    })
    
}
function ej7(){
    let texto1 = document.createElement("a");
    texto1.innerHTML="Haz clic aqui 1";
    document.body.appendChild(texto1);
    document.write("<br/>")
    texto1.addEventListener("click",function(){
        document.write('Última actualización: ' + document.lastModified);
    })
    let texto2 = document.createElement("a");
    texto2.innerHTML="Haz clic aqui 2";
    document.body.appendChild(texto2);
    document.write("<br/>")
    texto2.addEventListener("click",function(){
        alert('URL de origen: ' + document.referrer);
    })
    let texto3 = document.createElement("a");
    texto3.innerHTML="Haz clic aqui 3";
    document.body.appendChild(texto3);
    document.write("<br/>")
    texto3.addEventListener("click",function(){
        alert('Título del documento: ' + document.title);
    })
    let texto4 = document.createElement("a");
    texto4.innerHTML="Haz clic aqui 4";
    document.body.appendChild(texto4);
    document.write("<br/>")
    texto4.addEventListener("click",function(){
        alert('URL completa: ' + window.location.href);
    })
    let texto5 = document.createElement("a");
    texto5.innerHTML="Haz clic aqui 5";
    document.body.appendChild(texto5);
    document.write("<br/>")
    texto5.addEventListener("click",function(){
        document.body.innerHTML += '<p>Este texto se añade cuando pulsamos el link.</p>';
    })
    let texto6 = document.createElement("a");
    texto6.innerHTML="Haz clic aqui 6";
    document.body.appendChild(texto6);
    document.write("<br/>")
    texto6.addEventListener("click",function(){
        var anclas = document.getElementsByTagName('a');
        alert('Número de anclas: ' + anclas.length);
    })
    let texto7 = document.createElement("a");
    texto7.innerHTML="Haz clic aqui 7";
    document.body.appendChild(texto7);
    document.write("<br/>")
    texto7.addEventListener("click",function(){
        var imagenes = document.getElementsByTagName('img');
        alert('Número de imágenes: ' + imagenes.length);
    })
    let texto8 = document.createElement("a");
    texto8.innerHTML="Haz clic aqui 8";
    document.body.appendChild(texto8);
    document.write("<br/>")
    texto8.addEventListener("click",function(){
        var imagenes = document.getElementsByTagName('img');
            alert('ID de la primera imagen: ' + imagenes[0].id);
    })
    let texto9 = document.createElement("a");
    texto9.innerHTML="Haz clic aqui 9";
    document.body.appendChild(texto9);
    document.write("<br/>")
    texto9.addEventListener("click",function(){
        var enlaces = document.links;
        alert('Número de enlaces: ' + enlaces.length);
    })
    let texto10 = document.createElement("a");
    texto10.innerHTML="Haz clic aqui 10";
    document.body.appendChild(texto10);
    document.write("<br/>")
    texto10.addEventListener("click",function(){
        document.title = 'Nuevo título';
    })
}