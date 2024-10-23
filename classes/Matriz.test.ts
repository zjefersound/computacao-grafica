import { Matriz } from './Matriz';

describe('Matriz', () => {
    it('deve criar uma matriz com os valores corretos', () => {
        const matriz = new Matriz(2, 2, [
            [1, 2],
            [3, 4]
        ]);

        expect(matriz['dados']).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });

    it('deve multiplicar duas matrizes corretamente', () => {
        const matriz1 = new Matriz(2, 3, [
            [1, 2, 3],
            [4, 5, 6]
        ]);

        const matriz2 = new Matriz(3, 2, [
            [7, 8],
            [9, 10],
            [11, 12]
        ]);

        const resultadoEsperado = new Matriz(2, 2, [
            [58, 64],
            [139, 154]
        ]);

        const resultado = Matriz.multiplicar(matriz1, matriz2);

        expect(resultado).not.toBeNull();
        expect(resultado!['dados']).toEqual(resultadoEsperado['dados']);
    });

    it('deve retornar null para multiplicação de matrizes incompatíveis', () => {
        const matriz1 = new Matriz(2, 3, [
            [1, 2, 3],
            [4, 5, 6]
        ]);

        const matriz2 = new Matriz(2, 2, [
            [7, 8],
            [9, 10]
        ]);

        const resultado = Matriz.multiplicar(matriz1, matriz2);

        expect(resultado).toBeNull();
    });

    it('deve preencher uma matriz com zeros se valores não forem fornecidos', () => {
        const matriz = new Matriz(2, 2);

        expect(matriz['dados']).toEqual([
            [0, 0],
            [0, 0]
        ]);
    });

    it('deve imprimir a matriz corretamente', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        const matriz = new Matriz(2, 2, [
            [1, 2],
            [3, 4]
        ]);

        matriz.imprimir();

        expect(consoleSpy).toHaveBeenCalledWith('Matriz:');
        expect(consoleSpy).toHaveBeenCalledWith('1 2');
        expect(consoleSpy).toHaveBeenCalledWith('3 4');
        expect(consoleSpy).toHaveBeenCalledWith('\n');

        consoleSpy.mockRestore();
    });
});
