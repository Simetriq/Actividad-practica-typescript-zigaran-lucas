//  Nivel 1 – Abstracción

// Actividad: Película

// Creá una clase Pelicula con:

// Atributos: titulo, director, anio, genero.

// Método mostrarInfo(): string que devuelva algo como:
// "El Padrino (1972) - Dir. Francis Ford Coppola - Género: Drama".

// Instanciá 3 películas y mostrá su información.

// Objetivo: practicar clases, constructor y métodos simples.

class Pelicula {
    titulo: string;
    director: string;
    anio: number;
    genero: string

    constructor(titulo: string, director: string, anio: number, genero: string){
        
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.genero = genero;
    }
    mostrarInfo(): string{
        return `${this.titulo} (${this.anio}) - Dir. ${this.director} - Género: ${this.genero})`
    }
}

const pelicula = new Pelicula("Superman", "Zigaran Lucas", 2012, "Accion" );

console.log(pelicula.mostrarInfo())
