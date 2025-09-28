import Database from '../db/database.js'
const database = new Database()

export default class SalaryIncreaseModels {
    #aumentoId
    #aumentoData
    #aumentoPercentual
    #usarioId

    get aumentoId() {
        return this.#aumentoId
    }
    set aumentoId(value) {
        this.#aumentoId = value
    }
    get aumentoData() {
        return this.#aumentoData
    }
    set aumentoData(value) {
        this.#aumentoData = value
    }
    get aumentoPercentual() {
        return this.#aumentoPercentual
    }
    set aumentoPercentual(value) {
        this.#aumentoPercentual = value
    }
    get usarioId() {
        return this.#usarioId
    }
    set usarioId(value) {
        this.#usarioId = value
    }

    constructor(aumentoId, aumentoData, aumentoPercentual, usarioId) {
        this.#aumentoId = aumentoId
        this.#aumentoData = aumentoData
        this.#aumentoPercentual = aumentoPercentual
        this.#usarioId = usarioId
    }
}