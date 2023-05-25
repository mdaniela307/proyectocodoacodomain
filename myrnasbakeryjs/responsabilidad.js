function traer(){
    hechoCont=document.querySelector('#factid')
      fetch('https://catfact.ninja/fact')
      .then(res=>res.json())
      .then(data=>{
          hechoCont.innerHTML=`${data.fact}`
      
      }
      
      )
  }