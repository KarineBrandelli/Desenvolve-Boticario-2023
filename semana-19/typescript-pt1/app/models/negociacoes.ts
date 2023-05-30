import { Negociacao } from "./negociacao.js";

// Array<Negociacao> === Negociacao[]
// ReadonlyArray<Negociacao> === readonly Negociacao[]

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
