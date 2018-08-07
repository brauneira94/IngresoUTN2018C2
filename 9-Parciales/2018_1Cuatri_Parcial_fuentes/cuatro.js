function mostrar() {
    var num1;
    var num2;
    var total;
    

    num1 = prompt("Ingrese num1");
    num1 = parseInt(num1);
    num2 = prompt("ingrese num2");
    num2 = parseInt(num2);

    if (num1 == num2){
        
        num1 = num1.toString();
        alert(num1 + num2);   
    }
     else if (num1>num2){
      
        total = num1-num2;
        alert ("La resta es " +total);


    }
    else {

        total = num1+num2
        if (total >10){

            alert("La suma es " +total + " y supero el 10");


        }
        else{
        alert ("la suma es " +total);
        }
    }



}
