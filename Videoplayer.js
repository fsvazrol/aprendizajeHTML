function iniciar() {
    maximo = 600;
    medio = document.getElementById('medio');
    reproducir = document.getElementById('reproducir');
    barra = document.getElementById('barra');
    progreso = document.getElementById('progreso');
    reproducir.addEventListener('click', presionar, false);
    barra.addEventListener('click', mover, false);
    volumen.addEventListener('input', cambiarVolumen);
}
  
function presionar() {
    if (!medio.paused && !medio.ended) {
      medio.pause();
      reproducir.innerHTML = '►';
      window.clearInterval(bucle);
    } else {
      medio.play();
      reproducir.innerHTML = '❚❚';
      bucle = setInterval(estado, 1000);
    }
}
  
function estado() {
    if (!medio.ended) {
      var total = parseInt(medio.currentTime * maximo / medio.duration);
      progreso.style.width = total + 'px';
    } else {
      progreso.style.width = '0px';
      reproducir.innerHTML = '►';
      window.clearInterval(bucle);
    }
}
  
function mover(e) {
    if (!medio.paused && !medio.ended) {
      var ratonX = e.pageX - barra.offsetLeft;
      var nuevoTiempo = ratonX * medio.duration / maximo;
      medio.currentTime = nuevoTiempo;
      progreso.style.width = ratonX + 'px';
    }
}
  
function skip(value) {
    medio.currentTime += value;
}
  
function launchFullScreen(element) {
    if (medio.requestFullScreen) {
      medio.requestFullScreen();
    } else if (medio.mozRequestFullScreen) {
      medio.mozRequestFullScreen();
    } else if (medio.webkitRequestFullScreen) {
      medio.webkitRequestFullScreen();
    }
}
window.addEventListener('load', iniciar, false);