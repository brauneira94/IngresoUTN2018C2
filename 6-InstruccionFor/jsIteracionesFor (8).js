function mostrar()
{

var numero;
var contadorDivisores=0;

numero = parseInt(prompt("Ingrese un numero"));

for (   var i=1   ;  i=1   ; i++      )
{

if ( numero  % i == 0  )
{

 
  contadorDivisores++;

}

if (contadorDivisores == 2)
{

console.log(numero + "es primo");

}
else 
{
 console.log (numero + "no es primo");

}

}



}//FIN DE LA FUNCIÓN