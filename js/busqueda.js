let btn_seguir1 = document.getElementById("seguir1");
let btn_seguir2 = document.getElementById("seguir2");
let btn_seguir3 = document.getElementById("seguir3");
let btn_seguir4 = document.getElementById("seguir4");
let btn_seguir5 = document.getElementById("seguir5");
let btn_seguir6 = document.getElementById("seguir6");

let btn_ver = document.getElementById("btn-ver-mas");
let btn_ver2 = document.getElementById("btn-ver-mas2");

let filtro_persona = document.getElementById("filtro-persona");
let filtro_hashtag = document.getElementById("filtro-hashtag");
let filtro_lugar = document.getElementById("filtro-lugar");

let personas = document.getElementById("personas");
let hashatgs = document.getElementById("hashtags");
let lugares = document.getElementById("lugares");
let inicio_buscador = document.getElementById("regular-flow");

let btn_seleccionado = "";

function mostrar_persona(){
    personas.style.display = "block";
    hashatgs.style.display = "none";
    lugares.style.display = "none";
    inicio_buscador.style.display = "none";
}

function mostrar_hashtag(){
    personas.style.display = "none";
    hashatgs.style.display = "block";
    lugares.style.display = "none";
    inicio_buscador.style.display = "none";
}

function mostrar_lugar(){
    personas.style.display = "none";
    hashatgs.style.display = "none";
    lugares.style.display = "block";
    inicio_buscador.style.display = "none";
}

function mostrar_inicio(){
    personas.style.display = "none";
    hashatgs.style.display = "none";
    lugares.style.display = "none";
    inicio_buscador.style.display = "block";
}


function seguido(btn, numero){

    let p =  document.getElementById("text"+numero);
    console.log(p.innerHTML)
    if(p.innerHTML == "Seguir"){
        p.innerHTML = "Seguido";
        btn.className = "btn btn-success";
    }
    else if(p.innerHTML == "Seguido"){
        p.innerHTML = "Seguir";
        btn.className = "btn btn-primary";
    }
}

function ver_otros(){
    
    if(document.getElementById("cuentas1").style.display != "none"){
        console.log("hola");
        document.getElementById("cuentas1").style.display = "none";
        console.log(document.getElementById("cuentas2"))
        document.getElementById("cuentas2").style.display = "block";
    }
    else if(document.getElementById("cuentas1").style.display == "none"){
        document.getElementById("cuentas2").style.display = "none";
        document.getElementById("cuentas1").style.display = "block";
    } 
}

filtro_hashtag.addEventListener("click", function(){
    btn_seleccionado = "hashtags";
    btn_clases(filtro_hashtag, filtro_persona, filtro_lugar);
});

filtro_lugar.addEventListener("click", function(){
    btn_seleccionado = "lugares";
    btn_clases(filtro_lugar, filtro_hashtag, filtro_persona);
});

filtro_persona.addEventListener("click", function(){
    btn_seleccionado = "personas";
    btn_clases(filtro_persona, filtro_hashtag, filtro_lugar);
});

function btn_clases(btn, btn1, btn2){
    btn.className = "btn btn-secondary"
    btn1.className = "btn btn-light";
    btn2.className = "btn btn-light";
}

document.addEventListener('keydown', (e) => {
    
    console.log(document.getElementById("input-buscar").value)
    if(e.key == "Backspace"){//apreto backspace
        if(document.getElementById("input-buscar").value == ""){
            btn_seleccionado = "";
            filtro_hashtag.className = "btn btn-light";
            filtro_lugar.className = "btn btn-light";
            filtro_persona.className = "btn btn-light";

            setTimeout(() => {
                mostrar_inicio();
            }, 500);        }   
    }

    if(btn_seleccionado == "personas" || (e.key != "Backspace" && btn_seleccionado == "")){
        setTimeout(() => {
            mostrar_persona();
        }, 500);
    }
    else if(btn_seleccionado == "lugares"){
        setTimeout(() => {
            mostrar_lugar();
        }, 500);
    }
    else if(btn_seleccionado == "hashtags"){
        setTimeout(() => {
            mostrar_hashtag();
        }, 500);
    }
    
});

btn_seguir1.addEventListener("click", function(){
    seguido(btn_seguir1, 1);
});
btn_seguir2.addEventListener("click", function(){
    seguido(btn_seguir2, 2);
});
btn_seguir3.addEventListener("click", function(){
    seguido(btn_seguir3, 3);
});
btn_seguir4.addEventListener("click", function(){
    seguido(btn_seguir4, 4);
});
btn_seguir5.addEventListener("click", function(){
    seguido(btn_seguir5, 5);
});
btn_seguir6.addEventListener("click", function(){
    seguido(btn_seguir6, 6);
});
btn_ver.addEventListener("click", function(){
    ver_otros();
});
btn_ver2.addEventListener("click", function(){
    ver_otros();
});