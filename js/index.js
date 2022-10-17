const login = document.getElementById("login");
const logout = document.getElementById("logout");
const username = document.getElementById("username");
const password = document.getElementById("password");

login.addEventListener('click', ()=>{
     if(!username.value) username.style = "border-color: red";
     if(!password.value) password.style = "border-color: red";
});

logout.addEventListener('click', ()=> {
    username.style = "border-color: #ccc";
    password.style = "border-color: #ccc";
});