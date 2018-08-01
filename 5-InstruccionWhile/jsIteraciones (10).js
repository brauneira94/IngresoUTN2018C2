function mostrar()
{

    var numero;
	var contPositivos;
    var acumPositivos;
    var contNegativos;
    var contPares;
    var contCeros;
    var acumNegativos;
	var respuesta;
	var promedioneg;
    var promedioPos;
	var diferencia;

	do 
	{
       numero = parseInt(prompt("ingrese numero"));
	
    // me fijo el signo del numero
    // el numero puede ser positivo, negativo o ceros

if (numero > 0)

{
  contPositivos++;
  acumPositivos = acumPositivos + numero;

}
else if (numero < 0)

{ 
  contNegativos++;
  acumNegativos = acumNegativos + numero;

}
//me fijo si el numero es par
else 

{
contCeros++;
  
}

if ( numero %2 == 0)

{
  contPares++;

}

   respuesta = prompt ("queres seguir?");}

while (respuesta != "no");

//aca se realiza el calculo de los promedios y la diferencia

if (contNegativos != 0)
{
   promedioNeg = acumNegativos / contNegativos;

}

if (contPositivos != 0)
{
   promedioPos = acumPositivos / contPositivos;

}

diferencia = contPositivos - contNegativos;

//Muestro los datos al usuario

document.write("1.Suma de los negativos: " + acumNegativos + "<br>");
document.write("2.Suma de los positivos: " + acumPositivos + "<br>");
document.write("3.Cantidad de positivos: " + contPositivos + "<br");
document.write("4.Cantidad de negativos: " + contNegativos + "<br");
document.write("5.Cantidad de ceros: " + contCeros + "<br");
document.write("6.Cantidad de numeros pares: " + contPares + "<br");
document.write("7.Promedio de positivos: " + promedioPos + "<br");
document.write("8.Promedio de negativos: " + promedioNeg + "<br");
document.write("9.Diferencia entre positivos y negativos: " + diferencia + "<br");


}//FIN DE LA FUNCIÓN