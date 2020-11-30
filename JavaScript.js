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

function funcionA() {
  var radios = document.getElementsByClassName("A")
  var len = radios.length
  var contA = 0
  for (var i = 0; i < len; i++) {
    if (radios[i].checked) {
      contA++
    }
  }
  document.getElementById("resultA").innerHTML = contA;
}
function funcionB() {
  var radios = document.getElementsByClassName("B")
  var len = radios.length
  var contB = 0
  for (var i = 0; i < len; i++) {
    if (radios[i].checked) {
      contB++
    }
  }
  document.getElementById("resultB").innerHTML = contB;
}
function funcionC() {
  var radios = document.getElementsByClassName("C")
  var len = radios.length
  var contC = 0
  for (var i = 0; i < len; i++) {
    if (radios[i].checked) {
      contC++
    }
  }
  document.getElementById("resultC").innerHTML = contC;
}
function funcionD() {
  var radios = document.getElementsByClassName("D")
  var len = radios.length
  var contD = 0
  for (var i = 0; i < len; i++) {
    if (radios[i].checked) {
      contD++
    }
  }
  document.getElementById("resultD").innerHTML = contD;
}