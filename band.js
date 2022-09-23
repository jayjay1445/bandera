function validateform()
{
    const text = document.getElementById('text').value;
const password =document.getElementById('password').value;

if(text=="Julie" && password=="tania"){
    alert("logged in");

    window.location ="home.html"
} else{
    alert("Incorrect username or password")
}
}