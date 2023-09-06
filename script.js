function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegando a imagem 
  const img = document.querySelector("#profile img")
  
  //substituindo a imagem
  if(html.classList.contains("light")){
  //se tiver light mode adicionar a imagem light 
  
    img.setAttribute("src", "./assets/avatar.light.png")
   
  }  
  
   else {
    img.setAttribute("src", "./assets/avatar.png")
    //se tiver sem light mode, manter a imagem dark mode

  }
}
