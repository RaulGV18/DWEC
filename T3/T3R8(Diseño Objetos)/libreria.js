class puzzle {
    constructor(tamaño,imagen){
        this.tamaño=tamaño;
        this.imagen=imagen;
        posicionx=0;
        posiciony=0;
        movimientos=0;
        tiempo=0;
    }

    /**
     * metodos que mueven la ficha hacia la direccion escogida    
     */
    moverarriba() {
        posiciony++
        movimientos++
    }
    moverabajo(){
        posiciony--
        movimientos++
    }
    moverderecha(){
        posicionx++
        movimientos++
    }
    moverizquierda(){
        posicionx--
        movimientos++
    }
    /**
     * metodo para hacer un contador de los segundos que se tarda en completar
     */
    contador() {

    }
    /**
     * metodo para dibujar el tablero en pantalla
     */
    dibujar(){
        
    }

}
class tresenraya {
    constructor() {
        marcasj1=0
        marcasj2=0
    }
    tablero(){
        for (let i=0;i<3;i++){
            document.write("<tr>")
            for(let j=0;j<3;j++){
                document.write("<td id="+i+"-"+j+"></td>")
            }
            document.write("</tr>")
        }
    }
    /**
     * metodo que comprueba si las casillas marcadas por cada jugador
     * hacen 3 en raya o no
     */
    comprobar(){

    }
    /**
     * metodo para cambiar el turno
     * con una variable bandera se comprobara si es el turno del jugador 1 o no
     * si esta esta en true sera el turno del jugador uno y si no no
     */
    turno(){
        
    }
    
}
class Buscaminas {
    constructor(){
        limitetemp=240;
    }
    tablero(){
        for (let i=0;i<8;i++){
            document.write("<tr>")
            for(let j=0;j<8;j++){
                document.write("<td id="+i+"-"+j+"></td>")
            }
            document.write("</tr>")
        }
    }
    /**
     * una vez generado el tablero se generaran las minas en posiciones aleatorias
     * este metodo debe tambien poner el numero que corresponda en cada una de las casillas
     * sin minas
     */
    plantarminas(){

    }
    /**
     * este metodo se usa de contador para el juego
     */
    contador(){

    }
    /**
     * esta funcion debe revelar las casillas en las que haga click el usuario
     * en caso de ser varias casillas sin numero circundantes se revelan tambien
     */
    click(){

    }
}