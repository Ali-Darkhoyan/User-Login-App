
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
if ( username === "zaphod" && password === "answerToLife42")
{
alert ("Login Successfull!");
//location = "https://github.com/farhadahmed/skillspire-09-2019-full-stack"; // Redirecting to other page.
}

else
    {

    alert("Wrong Username or Password");
    }
//btoa()
    let UserB64 = btoa(username)
    let PassB64 = btoa (password)
        console.log (UserB64 + PassB64);
//atob()
    let UserDecode = atob (UserB64)
    let PassDecode = atob (PassB64)
        console.log (UserDecode + PassDecode);
}