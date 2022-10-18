const login = document.getElementById("login");
const logout = document.getElementById("logout");
const message = document.getElementById("message");
const username = document.getElementById("username");
const password = document.getElementById("password");
const messageContainer = document.getElementById("message-container");
const colorGrey = "ccc", colorRed = "ff0000";

login.addEventListener('click', ()=>{
    if(!username.value && !password.value){
        setBorderColor(username, colorRed);
        setBorderColor(password, colorRed);
        messageAlert("Fill the all field",0);
    }

    if(!username.value){
        setBorderColor(username, colorRed);
      
        }
    if(!password.value){
        setBorderColor(password, colorRed);
    }
});

logout.addEventListener('click', ()=> {
    setBorderColor(username, colorGrey);
    setBorderColor(password, colorGrey);
    messageAlert(-2);

    if(username && password){
         message.style.color = "#000000";
         messageAlert(`Have a great day ${username.value}!`, 0);
    }
});

  function messageAlert(msg, position){
    !Number.isInteger(msg) ? message.innerText = msg:'';
    messageContainer.style = `top: ${position}rem `;
  }

  function setBorderColor(node, color){
        node.style = `border-color: #${color}`;
  }