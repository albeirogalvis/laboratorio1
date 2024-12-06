let operacion = ``;

function menu(){
    operacion = prompt(`/ncalculadora Basica
    1 - suma
    2 - resta
    3 - multiplicacion
    4 - divicion
    0 - salir

     Eliga una opcion:`)
    
if ( operacion === `1` || operacon ===  operacion `2` || operacion === `3` || operacion === `4` ){
    capturaDatos();
    menu();
}else if (operacion === `0` || operacion === null){
    alert(`Fin de la operacion`);
}else{
    alert(`Opcion NO valida`);
    menu();
   }
}

function capturaDatos(){
    let num1, num2;
    while (isNaN(num1) ){
        num1 = prompt(`Ingrese primer numero: `);
    }
    while ( isNaN(num2) ){
        num2 = prompt(`Ingrese el segundo numero: `)
    }
    realizarOperaciones(Number(num1), Number(num2),operacion);
}

function realizarOperacion(num1,num2,operacion){
    if (operacion === `1`)
        alert(`El resultado de la SUMA es: ${num1+num2}`);
    else if (operacion === `2`)
        alert(`El resultado de l RESTA es: ${num1-num2}`);
    else if (operacion === `3`)
        alert(`El resultado de la MULTIPLICACION es: ${num1*num2}`);
    else if (operacion=== `4`){
        if (num2 === 0)
        alert(`El resultado de la DIVICION es: ${num1/num2}`)
       else
           alert("no se admita divicion x 0");
       }  
 } 

menu();