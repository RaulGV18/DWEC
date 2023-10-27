function contador(saltos){
    document.writeln("<br>")
    document.writeln(saltos)  
    saltos--
    if (saltos>0)
        setTimeout(contador,1000,saltos)
    else {
        window.location.replace("https://www.google.com/?hl=es")
    }
}

function Reloj(){
    let msPeriodo=200
    setTimeout(reloj, 300, msPeriodo);
}
function reloj(msPeriodo){
    
    const tiempo=new Date()
    document.write("<br>")
    document.write(""+tiempo.getHours()+ ":"+tiempo.getMinutes()+":"+tiempo.getSeconds())
    setTimeout(reloj,1000,msPeriodo)
}