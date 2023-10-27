function ageCalculator(añoNac) {
    let añoactual = 2023;
    let edad= añoactual-añoNac;
    let edad2 = añoactual-añoNac-1;
    document.write("tus posibles edades son " + edad + " o " + edad2);

}
function supplyCalculator(añoinicial) {
    let añomax=80;
    let cantdia=3;
    let años = añomax-añoinicial;
    let total=cantdia*365*años;
    document.write("la cantidad de barras de pan que consumiras hasta que mueras es de " + total)
}
function geometrizer(radio){
    radiocuad=radio*radio;
    let area=Math.PI*radiocuad;
    let perimetro=2*Math.PI*radio;
    document.write("el area del circulo es "+ area + " y el perimetro es " + perimetro);
}
function convertemperature(celsius){
    let farenheit=(celsius * 9 / 5) + 32;
    document.write(celsius + " grados celsius son "+ farenheit + " fahrenheit")
    farenheit = prompt("introduzca una cantidad de grados fahrenheit")
    document.write("<br/>")
    celsius=(farenheit - 32) * 5 / 9;
    document.write(celsius + " grados celsius son "+ farenheit + " fahrenheit")
}