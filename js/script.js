var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("licuadora-sound");
var sonidoBoton = document.getElementById("blender-button-sound")



function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrBr();
        licuadora.classList.add("active");
    }else {
        estadoLicuadora = "apagada";
        hacerBrBr();
        licuadora.classList.remove("active");
    }
}

function hacerBrBr(){
    if (sonidoLicuadora.paused) {
        sonidoBoton.play();
        sonidoLicuadora.play();
    }else {
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}