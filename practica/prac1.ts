// Ejercicio 1 (versión simple) — Clase Rectangulo
// Creá una clase Rectangulo que represente un rectángulo simple.

// Atributos:

// base: number

// altura: number

// Constructor:

// Recibe base y altura y los asigna.

// Métodos:

// calcularArea(): number → devuelve base * altura.

// calcularPerimetro(): number → devuelve 2 * (base + altura).

// describir(): string → devuelve un string como:
// "Rectángulo de 5x3 — Área: 15, Perímetro: 16"



class Rectangulo {

    //Atributos
    base: number
    altura: number

    //Constructor
    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    //Metodo
    calcularArea(): number {
        const area = this.base * this.altura

        return area
    }

    calcularPerimetro(): number {
        const perimetro = 2 * (this.base + this.altura)

        return perimetro
    }

    describir(): string {
        const areaDescrib = this.calcularArea()
        const perimetroDescrib = this.calcularPerimetro()

        return `Tu rectangulo tiene Area:${areaDescrib} y Perimetro:${perimetroDescrib}`
    }
}


const r1 = new Rectangulo(5, 3);
console.log(r1.describir()); 

const r2 = new Rectangulo(10, 2);
console.log(r2.calcularArea()); 
console.log(r2.calcularPerimetro());