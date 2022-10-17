const login = document.getElementById("login");
const logout = document.getElementById("logout");
const message = document.getElementById("message");
const username = document.getElementById("username");
const password = document.getElementById("password");
const messageContainer = document.getElementById("message-container");
const colorGrey = "ccc", colorRed = "red";

login.addEventListener('click', ()=>{
    // if(!username.value && !password.value){
    //     setBorderColor(username, colorRed);
    //     setBorderColor(password, colorRed);
    //     messageAlert("Fill the all field",0);
    // }

    if(!username.value){
        setBorderColor(username, "red");
      
        }
    if(!password.value){
         password.style = "border-color: red";
    }
});

logout.addEventListener('click', ()=> {
    setBorderColor(username, colorGrey);
    setBorderColor(password, colorGrey);
    messageAlert(-2);
});

  function messageAlert(msg, position){
    msg > 0 ? message.innerText = msg:'';
    messageContainer.style = `top: ${position}rem `;
  }

  function setBorderColor(node, color){
        node.style = `border-color: #${color}`;
  }