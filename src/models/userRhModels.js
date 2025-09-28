import Database from '../db/database.js'
const database = new Database()

export default class UserRhModels {
    #usuarioId
    #usuarioNome
    #usuarioEmail
    #usuarioAtivo
    #usuarioSenha

    get usuarioId() {
        return this.#usuarioId
    }
    set usuarioId(value) {
        this.#usuarioId = value
    }
    get usuarioNome() {
        return this.#usuarioNome
    }
    set usuarioNome(value) {
        this.#usuarioNome = value
    }
    get usuarioEmail() {
        return this.#usuarioEmail
    }
    set usuarioEmail(value) {
        this.#usuarioEmail = value
    }
    get usuarioAtivo() {
        return this.#usuarioAtivo
    }
    set usuarioAtivo(value) {
        this.#usuarioAtivo = value
    }
    get usuarioSenha() {
        return this.#usuarioSenha
    }
    set usuarioSenha(value) {
        this.#usuarioSenha = value
    }

    constructor(usuarioId, usuarioNome, usuarioEmail, usuarioAtivo, usuarioSenha) {
        this.#usuarioId = usuarioId
        this.#usuarioNome = usuarioNome
        this.#usuarioEmail = usuarioEmail
        this.#usuarioAtivo = usuarioAtivo
        this.#usuarioSenha = usuarioSenha
    }
}