function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var contTempPares = 0;
    var marcaPesado;
    var pesoMax = 0;
    var pesoMin = 100;
    var contmenos0 = 0;
    var acumPeso = 0;
    var contPeso = 0;
    var respuesta;


    do {

        marca = prompt("Ingrese marca");
        peso = parseInt(prompt("Ingrese peso"));

        while (peso < 1 || peso > 100) {

            peso = parseInt(prompt("Reingrese peso"));


        }
        acumPeso = acumPeso + peso;
        contPeso++;
    

        temperatura = parseInt(prompt("Ingrese temperatura"));


        while (temperatura < -30 || temperatura > 30) {

            temperatura = parseInt(prompt("Reingrese temperatura"));

        }
        
        if (temperatura %2 == 0){

            contTempPares++;
        }

        if (peso>pesoMax){

            pesoMax = peso;
            marcaPesado = marca;
        }

        if (temperatura <0){

            contmenos0++;
        }

        if (peso < pesoMin){
         pesoMin = peso;


        }
        respuesta = prompt("Desea continuar?");

    } while (respuesta != "no");


    document.write("1.La cantidad de temperaturas pares: " + contTempPares + "<br>");
    document.write("2.La marca del mas pesado: " + marcaPesado + "<br>");
    document.write("3.La cantidad a menos de 0 grados: " + contmenos0 + "<br>");
    document.write("4.El promedio del peso de los productos: " + acumPeso/contPeso + "<br>");
    document.write("5.Peso maximo: " +pesoMax +" Peso minimo: " +pesoMin + "<br>");

}
