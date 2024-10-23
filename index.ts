import { Matriz } from "./classes/Matriz";

const matriz1 = new Matriz(2, 3, [
    [1, 2, 3],
    [4, 5, 6]
]);

const matriz2 = new Matriz(3, 2, [
    [7, 8],
    [9, 10],
    [11, 12]
]);

console.log("Matriz 1:");
matriz1.imprimir();

console.log("Matriz 2:");
matriz2.imprimir();

const resultado = Matriz.multiplicar(matriz1, matriz2);

if (resultado) {
    console.log("Resultado:");
    resultado.imprimir();
}
