/**Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto se ingresa por pantalla
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• Precio final debe ser mostrado en pantalla 
Alumnos:
  Diana Ciganda
  Pamela Tolosa
  Marcelo García
*/

import * as rs from "readline-sync";
const DESCUENTO: number = 1.5;
const MES_DESCUENTO: number = 10;
let producto: string = rs.question("ingrese producto de ceramica que desea comprar:  ");
let precio_unitario: number = rs.questionFloat("ingrese precio por unidad: ");
let cantidad: number = rs.questionInt("ingrese cantidad:  ");
let mes: number = 10;
if (MES_DESCUENTO == mes) {
    console.log("Felicidades usted cuenta con un descuento del 15% por el mes de la madre en el producto " + producto);

} else {
    console.log(" A usted no le corresponde descuento")
};
