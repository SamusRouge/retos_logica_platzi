/* basado en la logica de las siguientes operaciones y resultados: 
5+4=19 
8+2=610 
10+8=218 
12+9=321 
18+2=1620 
21+5=1626
se establece una calculadora capaz de realizar la misma operacion con cualquier numero
*/

//entrada de informacion del usuario
var numero1tx = prompt ("inserte numero 1");
var numero2tx = prompt ("inserte numero 2");

// conversion de dato de texto a dato numerico

var numero1 = parseInt (numero1tx);
var numero2 = parseInt (numero2tx);

//operaciones

var suma1 = numero1 + numero2;

var resta1 =numero1- numero2;


var resultado1 = resta1.toString() + suma1.toString ();

// print resultado

console.log (resultado1);


