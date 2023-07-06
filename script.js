// Seleccionar los elementos necesarios
var pantalla = document.getElementById('pantalla');
var botones = document.getElementsByTagName('button');

// Agregar un evento de clic a cada botón
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function() {
    // Obtener el valor del botón clickeado
    var valor = this.innerHTML;

    // Realizar la operación matemática correspondiente
    switch (valor) {
      case 'AC':
        pantalla.innerHTML = '0.';
        break;
      case '=':
        pantalla.innerHTML = eval(pantalla.innerHTML);
        break;
      default:
        if (pantalla.innerHTML === '0.') {
          pantalla.innerHTML = valor;
        } else {
          pantalla.innerHTML += valor;
        }
        break;
    }
  });
}