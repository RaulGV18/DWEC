let temanormal = document.getElementById("Normal");
let temaminimalista = document.getElementById("Minimalista");

function normal() {
  var enlaceCSS = document.querySelector("link[href='1-2B.css']");

  enlaceCSS.href = "1-2A.css";
};
function minimalista() {
  var enlaceCSS = document.querySelector("link[href='1-2A.css']");

  enlaceCSS.href = "1-2B.css";
};
