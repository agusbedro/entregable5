let btn_like1 = document.getElementById("btn-like1");
let btn_like2 = document.getElementById("btn-like2");
let btn_like3 = document.getElementById("btn-like3");
let btn_like4 = document.getElementById("btn-like4");
let btn_like5 = document.getElementById("btn-like5");
let btn_like6 = document.getElementById("btn-like6");

let btn_comment1 = document.getElementById("btn-comment1");
let btn_comment2 = document.getElementById("btn-comment2");
let btn_comment3 = document.getElementById("btn-comment3");
let btn_comment4 = document.getElementById("btn-comment4");
let btn_comment5 = document.getElementById("btn-comment5");
let btn_comment6 = document.getElementById("btn-comment6");

let btn_share1 = document.getElementById("btn-share1");
let btn_share2 = document.getElementById("btn-share2");
let btn_share3 = document.getElementById("btn-share3");
let btn_share4 = document.getElementById("btn-share4");
let btn_share5 = document.getElementById("btn-share5");
let btn_share6 = document.getElementById("btn-share6");


function comentar(numero){
    let input = document.getElementById("coment"+numero);
    input.style.display = "block";
}


function likear(numero){

    let img_like = document.getElementById("img-like"+numero);
    
    if(img_like.src == "http://127.0.0.1:5500/img/like.png")
        img_like.src = "http://127.0.0.1:5500/img/like-pink.png";
    else if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        img_like.src = "http://127.0.0.1:5500/img/like.png";
}


btn_comment1.addEventListener("click", function(e){
    comentar(1);
    let inputComentario1 = document.getElementById('coment1');
    inputComentario1.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let divComentario = document.getElementById('comentarioFoto1');
        divComentario.style.display = 'flex';
        let comentario = document.getElementById('comentario1');
        comentario.innerHTML = inputComentario1.value;
        inputComentario1.value = ' '
    }
})
});
btn_comment2.addEventListener("click", function(e){
    comentar(2);
    let inputComentario2 = document.getElementById('coment2');
    inputComentario2.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let divComentario = document.getElementById('comentarioFoto2');
        divComentario.style.display = 'flex';
        let comentario = document.getElementById('comentario2');
        comentario.innerHTML = inputComentario2.value;
        inputComentario2.value = ' '
    }
    })
})
btn_comment3.addEventListener("click", function(e){
    comentar(3);
    let inputComentario3 = document.getElementById('coment3');
    inputComentario3.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let divComentario = document.getElementById('comentarioFoto3');
        divComentario.style.display = 'flex';
        let comentario = document.getElementById('comentario3');
        comentario.innerHTML = inputComentario3.value;
        inputComentario3.value = ' '
    }
    })
})
btn_comment4.addEventListener("click", function(e){
    comentar(4);
    let inputComentario4 = document.getElementById('coment4');
    inputComentario4.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let divComentario = document.getElementById('comentarioFoto4');
        divComentario.style.display = 'flex';
        let comentario = document.getElementById('comentario4');
        comentario.innerHTML = inputComentario4.value;
        inputComentario4.value = ' '
    }
    })
})
btn_comment5.addEventListener("click", function(e){
    comentar(5);
    let inputComentario5 = document.getElementById('coment5');
    inputComentario5.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let divComentario = document.getElementById('comentarioFoto5');
        divComentario.style.display = 'flex';
        let comentario = document.getElementById('comentario5');
        comentario.innerHTML = inputComentario5.value;
        inputComentario5.value = ' '
    }
    })
})
btn_comment6.addEventListener("click", function(e){
    comentar(6);
    let inputComentario6 = document.getElementById('coment6');
    inputComentario6.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let divComentario = document.getElementById('comentarioFoto6');
        divComentario.style.display = 'flex';
        let comentario = document.getElementById('comentario6');
        comentario.innerHTML = inputComentario6.value;
        inputComentario6.value = ' '
    }
    })
})


btn_like1.addEventListener("click", function(e) {
    let mensaje = document.getElementById('mgsPublicacion1');
    mensaje.innerHTML = '14 me gusta'
    let img_like = document.getElementById("img-like1");
    if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        mensaje.innerHTML = '13 me gusta'
    likear(1);
});
btn_like2.addEventListener("click", function(e) {
    let mensaje = document.getElementById('mgsPublicacion2');
    mensaje.innerHTML = '4 me gusta'
    let img_like = document.getElementById("img-like2");

    if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        mensaje.innerHTML = '3 me gusta'
    likear(2);
});
btn_like3.addEventListener("click", function(e) {
    let mensaje = document.getElementById('mgsPublicacion3');
    mensaje.innerHTML = '81 me gusta'
    let img_like = document.getElementById("img-like3");
    if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        mensaje.innerHTML = '80 me gusta'
    likear(3);
});
btn_like4.addEventListener("click", function(e) {
    let mensaje = document.getElementById('mgsPublicacion4');
    mensaje.innerHTML = '2 me gusta'
    let img_like = document.getElementById("img-like4");
    if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        mensaje.innerHTML = '1 me gusta'
    likear(4);
});
btn_like5.addEventListener("click", function(e) {
    let mensaje = document.getElementById('mgsPublicacion5');
    mensaje.innerHTML = '121 me gusta'
    let img_like = document.getElementById("img-like5");
    if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        mensaje.innerHTML = '120 me gusta'
    likear(5);
});
btn_like6.addEventListener("click", function(e) {
    let mensaje = document.getElementById('mgsPublicacion6');
    mensaje.innerHTML = '11 me gusta'
    let img_like = document.getElementById("img-like6");
    if(img_like.src == "http://127.0.0.1:5500/img/like-pink.png")
        mensaje.innerHTML = '10 me gusta'
    likear(6);
});




