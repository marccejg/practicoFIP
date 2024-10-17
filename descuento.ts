/**Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto se ingresa por pantalla
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• Precio final debe ser mostrado en pantalla */

console.clear();
import * as fs from "readline-sync";
let precio: number = fs.questionFloat("ingrese el precio: ");
const descuento: number = 0.1;
let precioFinal: number = precio - precio * descuento;
console.log("El precio con descuento es: ", precioFinal)
