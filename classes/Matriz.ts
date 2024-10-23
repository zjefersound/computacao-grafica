export class Matriz {
    private linhas: number;
    private colunas: number;
    private dados: number[][];

    constructor(linhas: number, colunas: number, valores?: number[][]) {
        this.linhas = linhas;
        this.colunas = colunas;
        if (valores) {
            this.dados = valores;
        } else {
            this.dados = Array.from({ length: linhas }, () => Array(colunas).fill(0));
        }
    }

    imprimir(): void {
        console.log("Matriz:");
        for (let i = 0; i < this.linhas; i++) {
            console.log(this.dados[i].join(" "));
        }
        console.log("\n");
    }

    static multiplicar(m1: Matriz, m2: Matriz): Matriz | null {
        if (m1.colunas !== m2.linhas) {
            console.log("Matrizes não podem ser multiplicadas: o número de colunas da primeira matriz deve ser igual ao número de linhas da segunda");
            return null;
        }

        let resultado = new Matriz(m1.linhas, m2.colunas);

        for (let i = 0; i < m1.linhas; i++) {
            for (let j = 0; j < m2.colunas; j++) {
                let soma = 0;
                for (let k = 0; k < m1.colunas; k++) {
                    soma += m1.dados[i][k] * m2.dados[k][j];
                }
                resultado.dados[i][j] = soma;
            }
        }
        return resultado;
    }
}