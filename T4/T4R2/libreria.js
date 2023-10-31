let temanormal = document.getElementById("Normal");
let temaminimalista = document.getElementById("Minimalista");
 function temnormal() {
    
    document.getElementById("Normal").style.textDecoration = "none";
    document.getElementById("Minimalista").style.textDecoration = "none";
    let asideElements = document.getElementsByTagName("aside");
    asideElements[0].style.width = "100px"
    asideElements[0].style.height = "1000px"
    asideElements[0].style.backgroundColor = "blue"
    let bodyElements = document.getElementsByTagName("body");
    bodyElements[0].style.display = "flex"
    bodyElements[0].style.height = "100%"
    bodyElements[0].style.backgroundColor = "lightgoldenrodyellow"
    let ps = document.getElementsByTagName("p");
    for (let i = 0; i<ps.length;i++){
        ps[i].style.marginTop="10px"
        ps[i].style.marginLeft="10px"
    }
    let h = document.getElementsByTagName("h1")
    h[0].style.marginTop= "10px"
    h[0].style.marginLeft= "10px"

    document.getElementById("enlaces").style.backgroundColor = "lightblue"
    document.getElementById("enlaces").style.border = "1px solid blue"
    document.getElementById("enlaces").style.marginTop = "10px"
    document.getElementById("enlaces").style.marginLeft = "10px"
    let oculto = document.getElementsByClassName("oculto")
    for (i=0;i<oculto.length;i++){
        oculto[i].style.display = "block"
    }
    document.getElementById("marco").style.backgroundColor = "yellow"
    document.getElementById("marco").style.border = "2px solid black"

}

function temmin() {
    document.getElementById("Normal").style.textDecoration = "underline";
    document.getElementById("Minimalista").style.textDecoration = "underline";
    document.body.style.backgroundColor = "white"
    let oculto = document.getElementsByClassName("oculto")
    for (i=0;i<oculto.length;i++){
        oculto[i].style.display = "none"
    }
    document.getElementById("marco").style.backgroundColor = "white"
    document.getElementById("marco").style.border = ""
    document.getElementById("enlaces").style.backgroundColor = "white"
    document.getElementById("enlaces").style.border = ""
    let asideElements = document.getElementsByTagName("aside");
    asideElements[0].style.width = ""
    asideElements[0].style.height = ""
    asideElements[0].style.backgroundColor = "white"
}