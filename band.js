function validateform()
{
    const text = document.getElementById('text').value;
const password =document.getElementById('password').value;

if(text==null || text==''){
    alert('Enter login information');
    return false
}

if(password.length<=6){
    alert('Password incorrect');
    return false
}
}