function mostrar() {
    var nota;
    var sexo;
    var total = 0;
    var cantVarones = 0;
    var notaBaja=10;
    var sexoBaja;

    for (i = 0; i < 5; i++) {
        nota = parseInt(prompt("Ingrese nota"));
        while (nota < 0 || nota > 10) {

            nota = parseInt(prompt("Reingrese nota"));


        }
        sexo = prompt("Ingrese sexo");
        while (sexo != "m" && sexo != "f") {

            sexo = prompt("Reingrese sexo");
        }
        
        total += nota;
       
        if (sexo == "m" && nota >= 6) {
            
            cantVarones++;
        }

        if (nota < notaBaja){
            
            notaBaja = nota; 
            sexoBaja = sexo;
            

        }
    }
    alert (
        "Promedio notas totales: " +total/5 +"\nLa nota mas baja es: "+notaBaja +" Y su sexo es: "+sexoBaja +"\nCantidad varones con nota mayor a 6: " +cantVarones  


           );

}
