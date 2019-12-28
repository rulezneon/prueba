var divOrig = document.getElementById("divBotones");
var divCopia = document.getElementById("divCopia");
document.getElementById("SegundoBotton").addEventListener("click", function(){
    var mytxt = document.getElementById("mytxtbox");
    if(mytxt.value == "")
    {
        alert("vacio");
    }
    else
    {
        alert("Texto: " + mytxt.value);
    }
    //document.getElementById("PrimerBoton").click();
});
document.getElementById("btnCopiar").addEventListener("click",function(){
    divCopia.innerHTML += divOrig.innerHTML;
});
document.getElementById("btnLimpiar").addEventListener("click",function(){
    divCopia.innerHTML = "";
});
function segundaFuncion(){
    console.log("Todo esta bien");
}


