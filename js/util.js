const getHello = ()=>{
    fetch( 'https://stefanbohacek.com/hellosalut/?mode=auto')
    .then(response => response.json())
    .then((jsonData)=> jsonData);
  }