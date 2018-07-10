function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad <13)
{alert ("Niño")}

else if (edad >=13 && edad <=17)
{alert ("Adolescente")}

else
{alert ("Mayor de edad")}



}//FIN DE LA FUNCIÓN