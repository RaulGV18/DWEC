function validaExpresionRegular(scadena, sexpresion){
    const expR=new RegExp(sexpresion);
    return  expR.test(scadena)
}

class booklist {
    constructor() {
        this.librosleidos=0;
        this.libros=[];
        this.ultimolibroleido;

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
let libs = new booklist();

document.addEventListener("DOMContentLoaded", function () {
    let isbn=document.getElementById("isbn")
    let autor = document.getElementById("autor");
    let titulo = document.getElementById("titulo");
    let isbnband=false;
    let autorband=false;
    let tituband=false;
    isbn.onblur = function () {
        let expr = "^[0-9]{13}$"
        let valido=validaExpresionRegular(expr,isbn.value)
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
            let boton = document.getElementById("Añadir");
            boton.disabled = false;
          } else {
            let boton = document.getElementById("Añadir");
            boton.disabled = true;
          }
    }
    titulo.onblur= function() {
        if (titulo.value !== ""){
            tituband==true;
        } else {
            tituband==false;
        }
    }
    autor.onblur = function() {
        let expr = "^[A-Za-z]$"
        let valido=validaExpresionRegular(expr,autor.value)
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
            let boton = document.getElementById("Añadir");
            boton.disabled = false;
          } else {
            let boton = document.getElementById("Añadir");
            boton.disabled = true;
          }
    }
    let boton=document.getElementById("añadir");

    boton.onclick = function (){
        let lib=new book(document.getElementById("titulo").value,document.getElementById("genero").value,document.getElementById("autor").value,document.getElementById("isbn").value);
        libs.libros.push(lib);
        libs.libros.forEach(element => {
            let cont=0;
            let li=document.createElement("li")
            
            let tit=document.createElement("p")
            tit.id = "titlib" + cont;
            let autor= document.createElement("p")
            autor.id="autlib" + cont;
            let genero = document.createElement("p")
            genero.id="genlib" + cont;
            let 
        });
    }
    
});
