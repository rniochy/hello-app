const getHello = (code)=>{
    fetch( 'https://stefanbohacek.com/hellosalut/?mode=auto')
    .then(response => response.json())
    .then((jsonData)=> jsonData);
  }