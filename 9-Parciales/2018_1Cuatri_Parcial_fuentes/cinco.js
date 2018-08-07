function mostrar()
{
 var planeta;

 planeta = prompt("Ingrese planeta");

 switch (planeta)
 {
  case ("tierra") :

  alert("aca vivimos")
  break;

  case ("mercurio") :
  case ("venus"):

  alert("aca hace mas calor")
  break;

  case ("marte") :
  case ("jupiter") :
  case ("saturno") :
  case ("urano") :
  case ("neptuno") :
  case ("pluton") :

  alert ("aca hace mas frio")
  break;
  default : 
  alert(planeta +" No es un planeta valido ") 




 }
}
