class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
    }

    calcularSueldo(): number {
        return 0;
    }

    describir(): string {
        return `Empleado: ${this.nombre}, Antigüedad: ${this.antiguedad} años`;
    }
}

class EmpleadoFijo extends Empleado {
    sueldoBase: number
    
    constructor(nombre: string, antiguedad: number, sueldoBase: number) {
        super(nombre, antiguedad);
        this.sueldoBase = sueldoBase;
    }
    calcularSueldo(): number {
        return this.sueldoBase;
    }
}


const emp = new EmpleadoFijo('Luis', 5, 1500);
console.log(emp.describir());
console.log('Sueldo:', emp.calcularSueldo());

