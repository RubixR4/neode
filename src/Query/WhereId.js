export default class WhereId {
    constructor(alias, param, negative) {
        this._alias = alias;
        this._param = param;
        this._negative = negative;
    }

    setNegative() {
        this._negative = true;
    }

    toString() {
        const negative = this._negative ? 'NOT ' : '';
        return `${negative}id(${this._alias}) = $${this._param}`;
    }
}
