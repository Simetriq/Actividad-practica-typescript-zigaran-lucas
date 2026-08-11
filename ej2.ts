class CuentaBancaria {

    readonly titular: string;
    private saldo: number; 
    private historial: string[];

  
    constructor(titular: string, montoInicial: number) {
        this.titular = titular;
        this.saldo = montoInicial;
        this.historial = []; 
    }


    depositar(monto: number): void {

        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor a 0");
        }
        this.saldo += monto;

        this.historial.push(`Depósito: +${monto}`);
    }


    retirar(monto: number): void {

        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor a 0");
        }

        if (monto > this.saldo) {
            throw new Error("Saldo insuficiente para realizar el retiro");
        }
        this.saldo -= monto;
        this.historial.push(`Retiro: -${monto}`);
    }


    consultarSaldo(): number {
        return this.saldo;
    }


    obtenerHistorial(): string[] {
        return this.historial.slice(); 
    }
}