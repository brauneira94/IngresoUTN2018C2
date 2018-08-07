
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho  = prompt("ingrese ancho: ");
ancho = parseInt(ancho);
largo = prompt("Ingrese largo: ");
largo = parseInt(largo);

perimetro = (ancho+largo)*2;

alert("El perimetro es: " +perimetro);

}
