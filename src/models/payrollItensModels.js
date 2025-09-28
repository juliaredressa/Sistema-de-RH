import Database from '../db/database.js'
const database = new Database()

export default class PayrollItensModels {
    #idItens
    #idSalario
    #idFuncionario
    #idFolha

    get idItens() {
        return this.#idItens
    }
    set idItens(value){
        this.#idItens = value
    }
    get idSalario() {
        return this.#idSalario
    }
    set idSalario(value) {
        this.#idSalario = value
    }
    get idFuncionario() {
        return this.#idFuncionario
    }
    set idFuncionario(value) {
        this.#idFuncionario = value
    }
    get idFolha() {
        return this.#idFolha
    }
    set idFolha(value) {
        this.#idFolha = value
    }

    constructor(idItens, idSalario, idFuncionario, idFolha) {
        this.#idItens = idItens
        this.#idSalario = idSalario
        this.#idFuncionario = idFuncionario
        this.#idFolha = idFolha
    }

}