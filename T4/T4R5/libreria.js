function crearCookie(nombreUsu,valor,fechaExpiracion) {
    document.cookie = valor+"=" + encodeURIComponent(nombreUsu) + ";expires="+fechaExpiracion +";";
}

function leerCookie(name) {
    var nameEq = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEq) == 0) {
            return decodeURIComponent(c.substring(nameEq.length, c.length));
        }
    }
    return null;
}
function borrarCookie() {
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "colorletra=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "colorfondo=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "fontsize=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
function modificarestilo(){
    let colorletra=prompt("introduzca el color de la letra");
    let colorfondo=prompt("introduzca el color del fondo");
    let tamañoletra=prompt("introduzca el tamaño de la fuente");
    crearCookie(colorletra,"colorletra","Thu, 01 Jan 2099 00:00:00 UTC");
    crearCookie(colorfondo,"colorfondo","Thu, 01 Jan 2099 00:00:00 UTC");
    crearCookie(tamañoletra,"fontsize","Thu, 01 Jan 2099 00:00:00 UTC");
    document.body.style.backgroundColor=leerCookie("colorfondo");
    document.body.style.fontSize=leerCookie("fontsize");
    document.body.style.color=leerCookie("colorletra");
}
window.onclose = function () {
    document.cookie = "colorletra=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "colorfondo=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "fontsize=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}