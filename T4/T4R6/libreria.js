function validaExpresionRegular(scadena, sexpresion){
    const expR=new RegExp(sexpresion);
    return  expR.test(scadena)
}

class booklist {
    constructor() {
        this.librosleidos=0;
        this.libros=[];

    }
    add(libro){
        this.libros.push(libro);
    }
    finishbook(libro){

    }
    encontrarlibro(isbn){

    }
}
class book{
    constructor(titulo,genero,autor,isbn) {
        this.isbn=isbn;
        this.title=titulo;
        this.genre=genero;
        this.author=autor;
        this.read=false;
        this.readdate;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let isbn=document.getElementById("isbn")
    let autor = document.getElementById("autor");
    let titulo = document.getElementById("titulo");
    let isbnband=false;
    let autorband=false;
    let tituband=false;
    isbn.onblur = function () {
        let expr = "^[0-9]{13}$"
        let valido=validaExpresionRegular(isbn.value,expr)
        if (valido) {
            isbnband = true;
          } else {
            isbnband = false;
          }
          if (
            isbnband == true && autorband == true && tituband == true
          ) {
            botonhab = true;
          } else {
            botonhab = false;
          }
          if (botonhab) {
            let boton = document.getElementById("enlace");
            boton.style.display = "block"
          } else {
            let boton = document.getElementById("enlace");
            boton.style.display = "none"
          }
    }
    titulo.onblur= function() {
        if (titulo.value !== " "){
            tituband=true;
        } else {
            tituband=false;
        }
        if (
          isbnband == true && autorband == true && tituband == true
        ) {
          botonhab = true;
        } else {
          botonhab = false;
        }
        if (botonhab) {
          let boton = document.getElementById("enlace");
          boton.style.display = "block"
        } else {
          let boton = document.getElementById("enlace");
          boton.style.display = "none"
        }
    }
    autor.onblur = function() {
        let expr = "^[A-Za-z]+$"
        let valido=validaExpresionRegular(autor.value,expr)
        if (valido) {
            autorband = true;
          } else {
            isbnband = false;
          }
          if (
            isbnband == true && autorband == true && tituband == true
          ) {
            botonhab = true;
          } else {
            botonhab = false;
          }
          if (botonhab) {
            let boton = document.getElementById("enlace");
            boton.style.display = "block"
          } else {
            let boton = document.getElementById("enlace");
            boton.style.display = "none"
          }
    }
    
});
let libs = new booklist();
function añadirlibroslista(){
  let cont=0;
  let lista= document.getElementById("listalibros");
  lista.innerHTML="";
  let titulo = document.createElement("h4");
  titulo.innerText = "Lista de libros"
  lista.appendChild(titulo);
  let numlibs = document.createElement("p");

  let lib=new book(document.getElementById("titulo").value,document.getElementById("genero").value,document.getElementById("autor").value,document.getElementById("isbn").value);
  libs.libros.push(lib);
  numlibs.innerText = libs.libros.length;
  for (let i=0;i<libs.libros.length;i++){
      let li=document.createElement("li")
      li.className="libros";
      let tit=document.createElement("p")
      tit.id = "titlib" + cont;
      tit.innerText=libs.libros[i].title
      let autor= document.createElement("p")
      autor.id="autlib" + cont;
      autor.innerText=libs.libros[i].author
      let genero = document.createElement("p")
      genero.id="genlib" + cont;
      genero.innerText=libs.libros[i].genre
      let leido = document.createElement("p")
      leido.id="leidolib" + cont;
      if (libs.libros[i].read) {
        leido.innerText="Leido en fecha" + element.readdate
      } else {
        leido.innerText="No Leido"
      }
      li.appendChild(tit);
      li.appendChild(autor);
      li.appendChild(genero);
      li.appendChild(leido);
      lista.appendChild(li);
  };
}
