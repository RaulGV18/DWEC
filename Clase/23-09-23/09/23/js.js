function letraDNI(numero) {
    const array = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    if ( isNaN(numero)){
        return "-";
    }
    else if (numero>99999999 || numero<10000000){
        return "."
    }
    else {
        let letra = array[numero%23];
        return letra;

    }
}
function esprimo(n){
    let cont = 0;
    for (let i=0;i<n;i++){
        if (n%i == 0){
            cont++;
        }
    }
    if (cont<=2){
        return true;
    }
    else {
        return false;
    }
}
function primos100(){
    let
}