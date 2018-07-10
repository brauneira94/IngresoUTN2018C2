function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad = document.getElementById("edad").Value;
edad = parseInt(edad);

estado = document.getElementById("estadoCivil").Value;


if (edad <18 && estado != "Soltero" )
{   
    alert ("Es muy pequeño para NO ser soltero")
}

	


}//FIN DE LA FUNCIÓN