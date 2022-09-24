function validateform()
{
    var text = document.getElementById('text').value;
var password =document.getElementById('password').value;

if(text=="Jerrydownchurch19" && password=="Alisonjerry11"){
    alert('Welcome Back Alison Ann')

    window.location.href="home.html"
} else{
    alert("Incorrect username or password")
}
}

var btn=document.getElementById('sub');
btn.onclick= function(){
    alert('Welcome back Julie Veatch')
}

