function crearCookie(nombreUsu) {
    document.cookie = "usuario=" + encodeURIComponent(nombreUsu) + ";max-age=300";
}

function readCookie(name) {
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
function borrarCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}