let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-item img');
    const overlay = document.createElement('div');
    overlay.classList.add('img-overlay');
    const overlayImage = document.createElement('img');
    overlay.appendChild(overlayImage);
    document.body.appendChild(overlay);
  
    images.forEach(img => {
      img.addEventListener('click', function () {
        overlayImage.src = this.src;
        overlay.classList.add('show');
      });
    });
  
    overlay.addEventListener('click', function () {
      overlay.classList.remove('show');
    });
  });
  
