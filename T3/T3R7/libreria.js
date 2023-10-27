function persona2(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
    this.mayoredad = function () {
        if (this.edad>=18){
            return this.nombre + " Es mayor de edad"
        } else {
            return this.nombre + " No es mayor de edad"
        }
    }
} 




function telefono(numerodetelefono) {
    this.numero=numerodetelefono;
    this.llamadas=0;
    this.llamar = function() {
        this.llamadas++;
    }
}
/**
* @name notamedia
* @description funcion que calcula la nota media
de una array de personas
* @param {arr[]} array de personas
* @returns {media} devuelve la edad media de las personas de la array
* @example notamedia([20,25,30]) // returns 25
*/
function notamedia(arr){
    let media=0;
    for (let i=0;i<arr.length;i++){
        media+=arr[i].edad;
    };
    media = media/arr.length;
    return media;
}

function punto(x,y){
    this.x=x;
    this.y=y;
}
function linea(punto1,punto2){
    this.punto1=punto1;
    this,punto2=punto2;
}

class vivienda{
    constructor(calle,numero,codigopostal){
        this.calle=calle;
        this.numero=numero;
        this.codigopostal=codigopostal;
        document.write("Nueva casa en calle: " + this.calle + ", nº: " + this.numero + ", CP: " + this.codigopostal);
    };
    setNumero(numero){
        this.numero=numero;
    }
    setcalle(calle){
        this.calle=calle;
    }
    setcodigopostal(codigopostal){
        this.codigopostal=codigopostal;
    }
    imprimecalle(){
        return this.calle
    }
    imprimenumero() {
        return this.numero
    }
    imprimeCodigoPostal(){
        return this.codigopostal
    }

    
}
let id=0;
class alumno{
    constructor(nombre,nota){
        this.nombre=nombre;
        this.notamedia=nota;
        this.id=id;
        id++;
    }

}

class colegio {
    constructor(nombre,numaulas,numalumnos){
        this.nombre=nombre;
        this.numaulas=numaulas;
        this.numalumnos=numalumnos;
        this.alumnos=[new alumno("alumno1",5.00),new alumno("alumno2",5.00),new alumno("alumno3",5.00)];
    }
    consultarNotaMedia(id){
        for (let i=0;i<this.alumnos.length;i++){
            if (this.alumnos[i].id==id){
                return this.alumnos[i].notamedia;
            }
        }
    }
    ModificarNotaMedia(id,nota){
        for (let i=0;i<this.alumnos.length;i++){
            if (this.alumnos[i].id==id){
                this.alumnos[i].notamedia=nota;
            }
        }
    }

}