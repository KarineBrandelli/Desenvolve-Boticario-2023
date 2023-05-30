// Array<Negociacao> === Negociacao[]
// ReadonlyArray<Negociacao> === readonly Negociacao[]
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
