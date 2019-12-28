
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
    alert("STOP");
});

function segundaFuncion(){
    console.log("Todo esta bien");
}


