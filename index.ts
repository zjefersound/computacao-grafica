import { Matriz } from "./classes/Matriz";

const matriz1 = new Matriz(3, 2, [
    [2, 1],
    [1, 2],
    [3, 1]
]);

const matriz2 = new Matriz(2, 3, [
    [1, 2, 1],
    [1, 2, 1],
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
