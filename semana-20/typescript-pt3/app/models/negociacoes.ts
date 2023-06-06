import { Negociacao } from "./negociacao.js";

// Array<Negociacao> === Negociacao[]
// ReadonlyArray<Negociacao> === readonly Negociacao[]

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
