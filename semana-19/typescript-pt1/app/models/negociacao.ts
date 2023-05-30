export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data() {
    const data = new Date(this._data.getFullYear());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
