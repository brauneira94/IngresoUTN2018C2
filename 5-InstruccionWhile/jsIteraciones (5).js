function mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo.toLowerCase();

while (sexo !="f" && sexo !="m" )

{
  
    sexo = prompt("Sexo erroneo. Reingrese f ó m .");
    sexo.toLowerCase();

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN