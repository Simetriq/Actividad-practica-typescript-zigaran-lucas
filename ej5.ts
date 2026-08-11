class Persona {
    private readonly dni: string;
    public nombre: string;
    private _edad: number;
    private _email: string;

    constructor(dni: string, nombre: string, edad: number, email: string) {
        this.dni = dni;
        this.nombre = nombre;
        this._edad = edad;
        this._email = email;
        this.edad = edad;
        this.email = email;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(valor: number) {
        if (valor < 0 || valor > 120) {
            throw new Error("Edad debe estar entre 0 y 120");
        }
        this._edad = valor;
    }

    get email(): string {
        return this._email;
    }

    set email(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("Email debe contener @");
        }
        this._email = valor;
    }

    get esMayorDeEdad(): boolean {
        return this._edad >= 18;
    }

    get datosPublicos(): string {
        return `Nombre: ${this.nombre}, Mayor de edad: ${this.esMayorDeEdad}`;
    }
}