function mostrar() {
    var num1;
    var num2;
    //var suma;

    num1 = parseInt(prompt("Ingrese num1"));
    num2 = parseInt(prompt("Ingrese num2"));

    if (num1 == num2) {

        num1 = num1.toString();
        alert(num1 + num2);

    } else if (num1 > num2) {

        alert(num1 / num2);
    }
    else {
        //suma = num1+num2;


        if (num1 + num2 < 50) {
            alert("La suma es " + (num1 + num2) + " y es menor a 50");
        }
        else {

            alert(num1 + num2);
        }
    }


}
