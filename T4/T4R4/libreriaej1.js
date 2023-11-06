function validaExpresionRegular(scadena, sexpresion){
    const expR=new RegExp(sexpresion);
    return  expR.test(scadena)
}

function validarMayuscula(cadena){
    let expr="[A-Z]";
    console.log(cadena+" "+ expr + " "+validaExpresionRegular(cadena,expr));
}
function validarCaracterEspecial(cadena){
    let expr="[!@#$%^&]"
    console.log(cadena+" "+ expr + " "+validaExpresionRegular(cadena,expr));
}
function validarNumero(cadena){
    let expr="[0-9]+"
    console.log(cadena+" "+ expr + " "+validaExpresionRegular(cadena,expr));
}
function validarLongitud(cadena){
    let expr=".{8,}"
    console.log(cadena+" "+ expr + " "+validaExpresionRegular(cadena,expr));
}
function validarCorreo(cadena){
    let expr=".[@].[.com]";
    console.log(cadena+" "+ expr + " "+validaExpresionRegular(cadena,expr));
}
function validartarjeta(cadena){
    let expr="^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$";
    console.log(cadena+" "+ expr + " "+validaExpresionRegular(cadena,expr));
}