const login = document.getElementById("login");
const logout = document.getElementById("logout");
const message = document.getElementById("message");
const username = document.getElementById("username");
const password = document.getElementById("password");
const proglang = document.getElementById("proglang");
const messageContainer = document.getElementById("message-container");
const colorGrey = "ccc", colorRed = "ff0000";

login.addEventListener('click', ()=>{
    setColorMessage("f5580a");
    if(!username.value && !password.value){
        setBorderColor(username, colorRed);
        setBorderColor(password, colorRed);
        messageAlert("Fill the all field",0);
        return;
    }
    
    if(!username.value){
        setBorderColor(username, colorRed);
        messageAlert("Fill the User name field",0);
        return;
    }
    if(!password.value){
        messageAlert("Fill the Password field",0);
        setBorderColor(password, colorRed);
        return;
    }
    if(!proglang.value){
        messageAlert("Fill the Language Code field",0);
        setBorderColor(proglang, colorRed);
        return;
    }
    
    setColorMessage("4cfa7d");
    messageAlert(`<${proglang.value}> <${username.value}> \n you have successfully logged in!`,0);
});

logout.addEventListener('click', ()=> {
    setBorderColor(username, colorGrey);
    setBorderColor(password, colorGrey);
    messageAlert(-2);

    if(username.value && password.value){
        setColorMessage("000000");
         messageAlert(`Have a great day <${username.value}!>`, 0);
    }
});

  function messageAlert(msg, position){
    !Number.isInteger(msg) ? message.innerText = msg:'';
    messageContainer.style = `top: ${position}rem `;
  }

  function setBorderColor(node, color){
        node.style = `border-color: #${color}`;
  }
  function setColorMessage( color){
    message.style.color = `#${color}`;
  }

  (()=>{
    fetch( 'https://stefanbohacek.com/hellosalut/?mode=auto')
    .then( function( response ){
      return response.json()
    } )
    .then( function( jsonData ){
      console.log( jsonData ) 
    } );
  })()