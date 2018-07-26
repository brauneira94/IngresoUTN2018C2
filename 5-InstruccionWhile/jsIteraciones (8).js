function mostrar()
{


	var numero;
	var contador;
	var respuesta='si';
	var positivo=0;
	var negativo=1;

	while (respuesta=='si')
	{
       numero = parseInt(prompt("ingrese numero"));
if (numero >=0)

{
  positivo = positivo + numero;

}
else
{

	negativo = negativo * numero;
	contadorr++;
}


		respuesta = prompt ("queres seguir?");}

document.getElementById('suma').value=positivo;

if (contador == 0){

	nagativo = 0;
}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN