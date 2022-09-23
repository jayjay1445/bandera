function validateform()
{
    var text = document.getElementById('text').value;
var password =document.getElementById('password').value;

if(text=="Julie" && password=="tania"){

    window.location ="home.html"
} else{
    alert("Incorrect username or password")
}

}