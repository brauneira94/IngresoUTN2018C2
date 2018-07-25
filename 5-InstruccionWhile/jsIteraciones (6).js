function mostrar()
{
var i=1;
var numero;
var acumulador;
var promedio;

while (i<=5)

{
numero = parseInt(prompt("ingrese un numero: "));

acumulador = acumulador + numero;

contador = contador + 1 ;




}

promedio = acumulador /5;


document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio;


// 	var contador=0;
//	var acumulador=0;



//document.getElementById('suma').value=acumulador;
//document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN