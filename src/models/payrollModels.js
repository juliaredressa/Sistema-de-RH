import Database from '../db/database.js'
const database = new Database()

export default class PayrollModels {
    #folhaId
    #mes
    #ano
    #valorTotal

    get folhaId() {
        return this.#folhaId
    }
    set folhaId(value) {
        this.#folhaId = value
    }
    get mes() {
        return this.#mes
    }
    set mes(value) {
        this.#mes = value
    }
    get ano() {
        return this.#ano
    }
    set ano(value) {
        this.#ano = value
    }
    get valorTotal() {
        return this.#valorTotal
    }
    set valorTotal(value) {
        this.#valorTotal = value
    }

    constructor(folhaId, mes, ano, valorTotal) {
        this.#folhaId = folhaId
        this.#mes = mes
        this.#ano = ano
        this.#valorTotal = valorTotal
    }

}