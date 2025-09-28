import Database from '../db/database.js'
const database = new Database()

export default class PositionModels {
    #cargoId
    #cargoDescricao

    get cargoId() {
        return this.#cargoId
    }
    set cargoId(value) {
        this.#cargoId = value
    }
    get cargoDescricao() {
        return this.#cargoDescricao
    }
    set cargoDescricao(value) {
        this.#cargoDescricao = value
    }

    constructor(cargoId, cargoDescricao) {
        this.#cargoId = cargoId
        this.#cargoDescricao = cargoDescricao
    }
}