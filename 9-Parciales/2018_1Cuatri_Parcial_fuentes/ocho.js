function mostrar() {
    var letra;
    var numero;
    var respuesta;
    var contPares = 0;
    var contCeros = 0;
    var contImpares = 0;
    var acumPositivos = 0;
    var contPositivos = 0;
    var acumNegativos = 0;
    var numMax = -100;
    var numMin = 100;
    var letraMax;
    var letraMin;


    do {
        numero = parseInt(prompt("Ingrese numero"));
        while (numero < -100 || numero > 100) {

            numero = parseInt(prompt("Reingrese numero"));
        }

        letra = prompt("Ingrese letra");

        if (numero > 0) {
            contPositivos++;
            acumPositivos = numero + acumPositivos;

            if (numero % 2 == 0) {

                contPares++;


            } else {

                contImpares++;

            }

        }
        else if (numero < 0) {

            acumNegativos = numero + acumNegativos;
        } else {

            contCeros++;

        }

        if (numero > numMax) {
            numMax = numero;
            letraMax = letra;

        }

        if (numero < numMin) {

            numMin = numero;
            letraMin = letra;
        }

        respuesta = prompt("Queres seguir");


    } while (respuesta != "no");


    document.write("1.La cantidad de numeros pares: " + contPares + "<br>");
    document.write("2.La cantidad de numero impares: " + contImpares + "<br>");
    document.write("3.La cantidad de ceros: " + contCeros + "<br>");
    document.write("4.Promedio de los numeros positivos ingresados: " + acumPositivos / contPositivos + "<br>");
    document.write("5.La suma de los numeros negativos: " + acumNegativos + "<br>");
    document.write("6.Numero max: " + numMax + " letra max: " + letraMax + " numero min: " + numMin + " letra min: " + letraMin + "<br>");



}
