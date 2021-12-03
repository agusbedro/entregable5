let botonLogin = document.getElementById('btnLogin');

botonLogin.addEventListener('click', buttonLogin);

function buttonLogin(){
    let cuerpo = document.getElementById('login');
    cuerpo.style.display = 'none';
    let div = document.getElementById('cargaLogin');
    div.style.display = 'block';
    setTimeout(function(){window.location.replace('/html/home.html')},4000)
    //setTimeout(alert('hi'),3000);

    //window.location.replace('/html/home.html')
};