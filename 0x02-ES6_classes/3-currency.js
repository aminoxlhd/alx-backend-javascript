export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(va) {
    this._code = va;
  }

  get name() {
    return this._name;
  }

  set name(va) {
    this._name = va;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
