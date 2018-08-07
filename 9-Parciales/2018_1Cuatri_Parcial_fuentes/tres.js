function mostrar()
{var precio;
 var descuento;
 var preciofinal;

 precio = prompt("Ingrese precio");
 precio = parseInt(precio);

 descuento = prompt("Ingrese descuento");
 descuento = parseInt(descuento);

 preciofinal = precio * descuento / 100;

 document.getElementById("elPrecioFinal").value = preciofinal;

}
