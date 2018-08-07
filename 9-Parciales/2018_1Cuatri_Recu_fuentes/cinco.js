function mostrar()
{var dia;

    dia = prompt("Ingrese dia");

    switch (dia) {

    case "sabado" :
    case "domingo":
    alert("Buen finde");
    break;
    
    case "lunes" :
    case "lartes" :
    case "liercoles" :
    case "lueves" :
    case "liernes":
    alert("a trabajar");
    break;

    default:
    alert("dia invalido");


    
    }

}
