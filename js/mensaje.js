let input_msj = document.getElementById("input-mensaje");  
let btn_msj = document.getElementById("btn-mensaje");

btn_msj.addEventListener("click", function(){
    enviar_mensaje();
})

function enviar_mensaje(){
    let msj_oculto = document.getElementById("oculto");

    msj_oculto.style.display = "block";

    let chat = document.getElementById("mensaje-chat");
    chat.style.marginTop = "170px";
}