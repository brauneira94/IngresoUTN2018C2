function mostrar() {
    var precio;
    var descuento;
    var precioConDes;
    var iva;

    precio = parseInt(prompt("Ingrese precio"));
    descuento = parseInt(prompt("Ingrese descuento"));


    precioConDes = precio - ((descuento / 100) * precio);
    iva = (precio * 0.21);


    alert("1.Descuento en dinero: " + precio * descuento / 100 + " 2.Precio con descuento: " + precioConDes +" 3.El IVA es: " +iva);
    document.getElementById("elPrecioFinal").value = precioConDes+iva;
}