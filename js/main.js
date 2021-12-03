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
});
btn_comment2.addEventListener("click", function(e){
    comentar(2);
})
btn_comment3.addEventListener("click", function(e){
    comentar(3);
})
btn_comment4.addEventListener("click", function(e){
    comentar(4);
})
btn_comment5.addEventListener("click", function(e){
    comentar(5);
})
btn_comment6.addEventListener("click", function(e){
    comentar(6);
})


btn_like1.addEventListener("click", function(e) {
    likear(1);
});
btn_like2.addEventListener("click", function(e) {
    likear(2);
});
btn_like3.addEventListener("click", function(e) {
    likear(3);
});
btn_like5.addEventListener("click", function(e) {
    likear(5);
});
btn_like4.addEventListener("click", function(e) {
    likear(4);
});
btn_like6.addEventListener("click", function(e) {
    likear(6);
});




