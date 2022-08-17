let users=[];
let user={email:"aoyankar@gmail.com",password:"12345"}
document.getElementById("login").addEventListener("click",function(){

    let email=document.getElementById("email").value; 
    let password=document.getElementById("password").value;
    if(email==="" && password==="")
    {
        alert("Please Enter Correct Value");
    }
    else{
       return window.location.href="user.html";
    }

})

