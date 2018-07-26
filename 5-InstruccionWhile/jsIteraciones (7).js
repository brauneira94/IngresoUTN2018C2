function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';

	while (respuesta=='si')
	{
       numero = parseInt(prompt("ingrese numero"));

	   acumulador = acumulador + numero;
	   contador = contador + 1;

		respuesta = prompt ("queres seguir?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN