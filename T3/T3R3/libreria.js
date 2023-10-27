let clase = [];
function agregarEstudiante() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    clase.push(nombre + ", " + edad + ", " + nota1 + ", " + nota2 + ", " + nota3);
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}
function obtenerNota() {
        let estudiante = document.getElementById('nombbusc').value;
        let trimestre = document.getElementById('trimestbusc').value;
        let parrafo= document.createElement("p");
        for (let i = 0; i < clase.length; i++) {
            let alumno=clase[i].split(",");
            if (alumno[0]==estudiante){
                if (trimestre != "") {
                    parrafo.innerText=alumno[1 + trimestre];
                } else {
                    let nota1 = parseFloat(alumno[2]);
                    let nota2 = parseFloat(alumno[3]);
                    let nota3 = parseFloat(alumno[4]);
                    let media = parseFloat((nota1 + nota2 + nota3) / 3)
                    parrafo.innerText=media;
                }
                document.body.appendChild(parrafo)
            }
            
        }

}
function mediaedad(){
    let media = 0;
    let parrafo= document.createElement("p");
    for (let i = 0;i<clase.length;i++){
        let alumno=clase[i].split(",");
        media=media+parseInt(alumno[1]);
    }
    media=media/clase.length;
    parrafo.innerText = media;
    document.body.appendChild(parrafo);
}

function estudiantealeatorio(){
    let numalum= Math.floor(Math.random()*clase.length)
    let parrafo= document.createElement("p");
    let alumno = clase[numalum].split(",");
    parrafo.innerText = alumno[0];
    document.body.appendChild(parrafo);
}

function paresImpares(){
    let pares=[];
    let impares=[];
    let numeros=[];
    for (let i=0;i<100;i++){
        num=Math.floor(Math.random()*1000)+1;
        numeros.push(num);
    }
    document.write(numeros);
    numeros.forEach(element => {
        if (element%2==0){
            pares.push(element);
        } else {
            impares.push(element);
        }
    });
    document.write("<br/>")
    numeros= pares + impares;
    document.write(numeros);
    
}
let vendedores = [];
function calcularventas() {
    let nombre=document.getElementById("nombre").value;
    let ventas = document.getElementById("ventas").value;
    let sueldofinal = (ventas * 0.09) + 200;
    vendedores.push(nombre + "," + ventas + "," + sueldofinal);
    let tabla = document.getElementById("tablavendedores");
    tabla.innerHTML = "";
  
    let fila = tabla.insertRow();
    fila.insertCell().innerHTML = "<b>Nombre</b>";
    fila.insertCell().innerHTML = "<b>Ventas</b>";
    fila.insertCell().innerHTML = "<b>Sueldo final</b>";
  
    for (let i = 0; i <= vendedores.length; i++) {
      let fila = tabla.insertRow();
      let vendedor = vendedores[i].split(",");
      fila.insertCell().innerHTML = vendedor[0];
      fila.insertCell().innerHTML = vendedor[1];
      fila.insertCell().innerHTML = vendedor[2];
    }
}
function arrays(){
    let array= [1,2,3,4,5,6,7,8,9,10];
    for (let i=0;i<10;i++){
        array[i]=0;
    }
    document.write(array);
    document.write("<br/>");
    for (let i=0;i<10;i++){
        array[i]=1;
    }
    document.write(array);
    document.write("<br/>");
    for (let i=0;i<10;i++){
        document.write(array[i] + " ");
    }
}
function dados(){
    let dados=[];
    let cont2=0,cont3=0,cont4=0,cont5=0,cont6=0,cont7=0,cont8=0,cont9=0,cont10=0,cont11=0,cont12 = 0;
    for (let i=0;i<36000;i++){
        let num=Math.floor(Math.random()*6)+1;
        let num2=Math.floor(Math.random()*6)+1;
        let result= num+num2;
        dados.push(num+ "," + num2 + "," +result)
        let tirada= dados[i].split(",")
        switch (parseInt(tirada[2])){
            case 2: cont2++; break;
            case 3: cont3++; break;
            case 4: cont4++; break;
            case 5: cont5++; break;
            case 6: cont6++; break;
            case 7: cont7++; break;
            case 8: cont8++; break;
            case 9: cont9++; break;
            case 10: cont10++; break;
            case 11: cont11++; break;
            case 12: cont12++; break;
        }

    }
    document.write("2:" + cont2+ " 3:" + cont3 + " 4:" + cont4 + " 5:" + cont5 + " 6:" + cont6 + " 7:" + cont7 + " 8:" + cont8 + " 9:" + cont9 + " 10:" + cont10 + " 11:" + cont11 + " 12:" + cont12)
}

function dadosbidim(){
    let dados=[];
    let cont2=0,cont3=0,cont4=0,cont5=0,cont6=0,cont7=0,cont8=0,cont9=0,cont10=0,cont11=0,cont12 = 0;
    let tabla = document.getElementById("tabladados");
    tabla.innerHTML = "";
  
    let fila = tabla.insertRow();
    fila.insertCell().innerHTML = "<b>Numero1</b>";
    fila.insertCell().innerHTML = "<b>Numero2</b>";
    fila.insertCell().innerHTML = "<b>Resultado</b>";
    for (let i=0;i<36000;i++){
        dados[i]= new Array(3);
        let num=Math.floor(Math.random()*6)+1;
        let num2=Math.floor(Math.random()*6)+1;
        let result= num+num2;
        dados[i][0]=num;
        dados[i][1]=num2;
        dados[i][2]=result;
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = dados[i][0];
        fila.insertCell().innerHTML = dados[i][1];
        fila.insertCell().innerHTML = dados[i][2];
        switch (parseInt(dados[i][2])){
            case 2: cont2++; break;
            case 3: cont3++; break;
            case 4: cont4++; break;
            case 5: cont5++; break;
            case 6: cont6++; break;
            case 7: cont7++; break;
            case 8: cont8++; break;
            case 9: cont9++; break;
            case 10: cont10++; break;
            case 11: cont11++; break;
            case 12: cont12++; break;
        }

    }
    document.write("2:" + cont2+ " 3:" + cont3 + " 4:" + cont4 + " 5:" + cont5 + " 6:" + cont6 + " 7:" + cont7 + " 8:" + cont8 + " 9:" + cont9 + " 10:" + cont10 + " 11:" + cont11 + " 12:" + cont12)
}

var clientes=0;
var asientos = new Array(10).fill(false);

function reservarAsiento(tipo) {
    let inicio = tipo.toLowerCase() === "first" ? 0 : 5;
    let fin = tipo.toLowerCase() === "first" ? 5 : 10;
    for (let i = inicio; i < fin; i++) {
        if (!asientos[i]) {
            asientos[i] = true;
            return i + 1;
        }
    }
    return null;
}

// Función para generar una tarjeta de embarque
function generarTarjeta() {
    let datos = []
    datos[clientes] = new Array(3);
    datos[clientes][0] = document.getElementById("nombre").value;
    datos[clientes][1]= document.getElementById("tipo").value;
    if (datos[clientes][1].toLowerCase() == "first" || datos[clientes][1].toLowerCase() =="turista") {
        datos[clientes][2] = reservarAsiento(datos[clientes][1]);
        let ventana = window.open();
        ventana.document.write("<h1>Tarjeta de embarque</h1>");
        ventana.document.write("<p>Nombre: " + datos[clientes][0] + "</p>");
        ventana.document.write("<p>Número de asiento: " + datos[clientes][1] + "</p>");
        ventana.document.write("<p>Clase: " + datos[clientes][2] + "</p>");
        clientes++;
    } else {
        alert("Lo sentimos, no quedan asientos disponibles en la clase " + tipo);
    }
    
}

