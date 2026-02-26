class FormaGeometrica {
    // "#"" Defini o atributo como privado, só podendo ser acessado por get (buscar valor) e set (colocar um valor)
    // Isso se chama ecapsulamento.
    #base
    #altura
    #tipo

    get base() {
        // "this" subistitui qualquer nome de objeto, não definindo um especifico
        return this.#base
    }

    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }

    set base(valor) {
        if (typeof valor !== "number" || valor <= 0) {
            // throw lança algo, nese caso, um erro
            throw new Error("ERRO: A base precisa ser númerica e maior que zero.")
        }
        this.#base = valor
    }

    set altura(valor) {
        if (typeof valor !== "number" || valor <= 0) {
            throw new Error("ERRO: A altura precisa ser númerica e maior que zero.")
        }
        this.#altura = valor
    }

    set tipo(valor) {
        if (!["R", "T", "E"].includes(valor.toUpperCase())) {
            throw new Error("ERRO: O tipo precisa ser um dos valores: R, T ou E.")
        }
        this.#tipo = valor.toUpperCase()
    }

    calcularArea(){
        switch(this.#tipo){
            case "R":
                return this.#base * this.#altura
            case "T":
                return this.#base * this.#altura / 2
            case "E":
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }
}

// Para instânciar um objeto em JS utiliza-se "new"
let forma1 = new FormaGeometrica()

forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "J"

console.log("Área da forma1: ", forma1.calcularArea())
