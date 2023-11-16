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
    finishbook(id){
      if (this.encontrarlibro(id)){
        let hoy = new Date();
        this.devolverlibro(id).readdate = hoy.getDate() +"-"+ hoy.getMonth()+"-" + hoy.getFullYear();
        return this.devolverlibro(id).readdate;
      } else {
        console.log("el libro no existe");
      }
    }
    encontrarlibro(id){
      for (let i = 0; i < this.libros.length; i++) {
        if (this.libros[i].id=id){
          return true;
        } else {
          return false;
        }
        
      }
    }
    devolverlibro(id){
      for (let i = 0; i < this.libros.length; i++) {
        if (this.libros[i].id=id){
          return this.libros[i];
        } else {
          return "";
        }
      }
    }
    contarlibrosleidos(){
      this.librosleidos=0;
      for (let i = 0; i < this.libros.length; i++) {
        if (this.libros[i].read){
          this.librosleidos++;
        } else {
          
        }
    }
    return this.librosleidos;
  }
}
let id = 0;
class book{

    constructor(titulo,genero,autor,isbn) {
        this.id=id;
        this.isbn=isbn;
        this.title=titulo;
        this.genre=genero;
        this.author=autor;
        this.read=false;
        this.readdate;
        id++;
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
  let contlibs=document.createElement("p");
  contlibs.id= "contlibs";
  contlibs.innerText = "libros leidos= " + libs.contarlibrosleidos()  + "/" + libs.libros.length;
  lista.appendChild(contlibs);
  for (let i=0;i<libs.libros.length;i++){
      let contlibs=document.createElement("p")
      let li=document.createElement("li")
      li.className="libros";
      let idlib=document.createElement("p")
      idlib.style.display = "none";
      idlib.innerText = lib.id;
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
        leido.innerText="Leido en fecha " + libs.finishbook(idlib.innerText);
      } else {
        leido.innerText="No Leido";
      }
      li.appendChild(idlib);
      li.appendChild(tit);
      li.appendChild(autor);
      li.appendChild(genero);
      li.appendChild(leido);
      lista.appendChild(li);
      li.onclick = function () {
        if (libs.libros[i].read) {
          leido.innerText="No Leido";
          libs.libros[i].read=false;
          libs.librosleidos--;
        } else {
          leido.innerText="Leido en fecha " + libs.finishbook(idlib.innerText);
          libs.libros[i].read=true;
          libs.librosleidos++;
        }
        let contlibs=document.getElementById("contlibs")
        contlibs.innerText = "libros leidos= " + libs.contarlibrosleidos()  + "/" + libs.libros.length;
      }
  };
}