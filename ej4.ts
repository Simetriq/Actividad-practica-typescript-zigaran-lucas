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

// ======================== Ejercicio 4 - Polimorfismo =======================================


class EmpleadoPorHoras extends Empleado {
    private horasTrabajadas: number;
    private valorHora: number;

    constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
        super(nombre, antiguedad);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    override calcularSueldo(): number {
        return this.horasTrabajadas * this.valorHora;
    }
}


class EmpleadoPorComision extends Empleado {
    private ventasDelMes: number;
    private porcentajeComision: number;

    constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
        super(nombre, antiguedad);
        this.ventasDelMes = ventasDelMes;
        this.porcentajeComision = porcentajeComision;
    }

    override calcularSueldo(): number {
        return this.ventasDelMes * this.porcentajeComision;
    }
}


const empleados: Empleado[] = [
    new EmpleadoFijo("Ana", 3, 1500),
    new EmpleadoPorHoras("Luis", 2, 40, 12),
    new EmpleadoPorComision("Marta", 5, 10000, 0.05),
];


for (let emp of empleados) {
    console.log(emp.calcularSueldo());
}

function calcularNomina(empleados: Empleado[]): number {
    let total = 0;
    for (let emp of empleados) {
        total += emp.calcularSueldo();
    }
    return total;
}