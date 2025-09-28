import Database from '../db/database.js'
const database = new Database()

export default class EmployeeModels{

    #id
    #cpf
    #nome
    #salario
    #dataAdmissao
    #dataDemicao
    #cargo

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }
    get cpf() {
        return this.#cpf
    }
    set cpf(value) {
        this.#cpf = value
    }
    get nome() {
        return this.#nome
    }
    set nome(value) {
        this.#nome = value
    }
    get salario() {
        return this.#salario
    }
    set salario(value) {
        this.#salario = value
    }
    get dataAdmissao() {
        return this.#dataAdmissao
    }
    set dataAdmissao(value) {
        this.#dataAdmissao = value
    }
    get dataDemicao() {
        return this.#dataDemicao
    }
    set dataDemicao(value) {
        this.#dataDemicao = value
    }
    get cargo() {
        return this.#cargo
    }
    set cargo(value) {
        this.#cargo = value
    }

    constructor(id, cpf, nome, salario, dataAdmissao, dataDemicao, cargo) {
        this.#id = id
        this.#cpf = cpf
        this.#nome = nome
        this.#salario = salario
        this.#dataAdmissao = dataAdmissao
        this.#dataDemicao = dataDemicao
        this.#cargo = cargo
    }

}
