function validateform()
{
    var text = document.getElementById('text').value;
var password =document.getElementById('password').value;

if(text=="Julie" && password=="tania"){

    window.location.href="https://github.com/jayjay1445/bandera/blob/76103e281da9cb7a07d0358670378d1e8ec115ba/home.html"
} else{
    alert("Incorrect username or password")
}
}

var btn=document.getElementById('sub');
btn.onclick= function(){
    alert('Welcome back Julie Veatch')
}

var btn2=document.getElementById('subno');
btn2.onclick= function(){
    alert('')
}