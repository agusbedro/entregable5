let btn_seguir1 = document.getElementById("seguir1");
let btn_seguir2 = document.getElementById("seguir2");
let btn_seguir3 = document.getElementById("seguir3");
let btn_seguir4 = document.getElementById("seguir4");
let btn_seguir5 = document.getElementById("seguir5");
let btn_seguir6 = document.getElementById("seguir6");


let btn_ver = document.getElementById("btn-ver-mas");
let btn_ver2 = document.getElementById("btn-ver-mas2");

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