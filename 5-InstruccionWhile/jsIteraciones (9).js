function mostrar()
{

    var numero;
	var contador=1;
	var respuesta='si';
	var maximo;
	var minimo;

	while (respuesta=='si')
	{
       numero = parseInt(prompt("ingrese numero"));
	
if (contador == 1)

{
  maximo = numero;
  minimo = numero;

}
if (numero > maximo)

{ maximo = numero;

}

if (numero <= minimo)
{

    minimo = numero;

}
contador++;

respuesta = prompt ("queres seguir?");
}

document.getElementById('maximo').value=maximo;

document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN