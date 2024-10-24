﻿# Computação Gráfica

## Get started:

Para rodar o projeto é necessário node na versão 20.17.0 ou superior.
https://nodejs.org/en

Para executar o projeto:

```bash
npm install
npm start
```

Para executar os testes:

```bash
npm test
```

## Classe Matriz:

Instancia uma matriz de x linhas e x colunas, também é possível passar o valor inicial.

Exemplo:

```ts
const matriz = new Matriz(2, 3, [
    [1, 2, 3],
    [4, 5, 6]
]);
```

#### `Matriz.multiplicar`

Para multiplicar a o número de colunas da primeira matriz deve ser igual o número de linhas da segunda, caso contrário retorna null e aparece uma mensagem no console.

```ts
const matriz1 = new Matriz(3, 2, [
    [2, 1],
    [1, 2],
    [3, 1]
]);

const matriz2 = new Matriz(2, 3, [
    [1, 2, 1],
    [1, 2, 1],
]);

// Resultado:
// Matriz:
// 3 6 3
// 3 6 3
// 4 8 4
```

![image](https://github.com/user-attachments/assets/61e16d78-841c-4ad3-a359-f053af08df9f)

