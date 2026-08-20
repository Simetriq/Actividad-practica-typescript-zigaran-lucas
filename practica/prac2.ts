// Ejercicio 2 — Encapsulamiento (versión simple) — Clase ControlRemoto
// Modelá una clase ControlRemoto que represente el control de un televisor. 
// La idea es que nadie de afuera pueda tocar directamente los atributos internos, solo a través de métodos.

// Atributos privados:

// volumenActual: number (inicia en 10)

// canalActual: number (inicia en 2)

// encendido: boolean (inicia en false)

// Constructor:

// Sin parámetros (o podés recibir valores iniciales opcionales si querés, pero no es obligatorio).

// Métodos:

// encender() → pone encendido en true.

// apagar() → pone encendido en false.

// subirVolumen() → si está encendido, incrementa volumenActual en 1, 
// pero sin pasar de 20. Si está apagado, no hace nada (o lanza un Error, vos elegís y lo justificás).

// bajarVolumen() → si está encendido, decrementa volumenActual en 1, 
// pero sin bajar de 0. Si está apagado, no hace nada.

// cambiarCanal(nuevoCanal: number) → si está encendido y nuevoCanal está entre 1 y 100, lo asigna; si no, no hace nada (o Error).

// obtenerEstado(): string → devuelve:

// "Apagado" si está apagado.

// "Encendido — Volumen: 10, Canal: 2" si está encendido (usando los valores actuales).

// Regla de encapsulamiento: volumenActual, canalActual y encendido deben ser private. 
// No se pueden leer ni modificar desde afuera directamente, solo mediante los métodos públicos.

class ControlRemoto {
    //Atributos
    
    private volumenActual: number = 10;
    private canalActual: number = 2;
    private encendido: boolean = false;

    //Metodo ----
    encender(): boolean {
        return this.encendido = true;
    }

    //Metodo ----
    apagar(): boolean {
        return this.encendido = false;
    }
    
    //Metodo ---
    subirVolumen(): number | void {

        if(this.encendido && this.volumenActual < 20){
            return this.volumenActual += 1 

        }else{
            return console.log("El volumen esta al Maximo");

        }
    }

    //Metodo ---
    bajarVolumen(): number | void {
        if(this.encendido && this.volumenActual > 1){
            return this.volumenActual -= 1

        }else{
            return console.log('El volumen esta al minimo');
        }
    }

    // Metodo ---
    cambiarCanal(nuevoCanal: number): number | void {
        if(this.encendido && nuevoCanal >= 1 && nuevoCanal <= 100){
            return this.canalActual = nuevoCanal;
        }
    }

    // Metodo
    obtenerEstado(): string | void {
    if (!this.encendido) {
        return "Apagado";
    }
    return `Encendido — Volumen: ${this.volumenActual}, Canal: ${this.canalActual}`;
}
}

const controlRemoto = new ControlRemoto();
console.log(controlRemoto.encender());
console.log(controlRemoto.obtenerEstado());