function mostrar()
{
var numero;
var contadorPares=0;

numero = parseInt(prompt("Ingrese un numero"));

for (   var i=1   ;  i<=numero   ; i++      )

{
if ( i % 2 == 0 )
{

  console.log(i);
  contadorPares++;

}


}
console.log("Cantidad pares: " +contadorPares );

}//FIN DE LA FUNCIÓN