//Botones
var botonRojo = document.getElementById('boton_Rojo');
var botonVerde = document.getElementById('boton_Verde');
var botonAzul = document.getElementById('boton_Azul');
var botondelete= document.getElementById('borrado');
//Defino el color inicial
var color = 'white'
//ingreso mi canvas al codigo
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
// Declaro el punto de arranque de las flechas 
var x = 150;
var y = 150;

//Declaro mis funciones para cambio de colores
function cambiarColorRojo() {
  color = 'red';
}
function cambiarColorVerde() {
  color = 'green';
}
function cambiarColorAzul() {
  color = 'blue';
}

// funcion de Delete 
function fborrando(){
  papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
}

//botoms listeners 
botonRojo.addEventListener('click', cambiarColorRojo);
botonVerde.addEventListener('click', cambiarColorVerde);
botonAzul.addEventListener('click', cambiarColorAzul);
botondelete.addEventListener('click', fborrando);

//KeyCodes
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);


//Como dibujar la linea 
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

// declaro mi funcion sobre como dibujar con el teclado
function dibujarTeclado(evento)
{
  var colorcito = color
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}