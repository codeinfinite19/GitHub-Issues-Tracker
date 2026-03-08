const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function(event){
    event.preventDefault();

    //1.Use name Validation 

    const inputUserName = (document.getElementById("input-userName")).value;
    const inputpassword = (document.getElementById("input-password")).value;

    if(inputUserName === "admin" && inputpassword === "admin123"){
        alert("okk");
       window.location.assign("./deshboard.html");
    }

    else{
        alert("invalid User name Or Password");
    }

    
}); 
