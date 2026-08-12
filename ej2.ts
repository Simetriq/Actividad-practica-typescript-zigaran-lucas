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
            console.log("El monto a depositar debe ser mayor a 0");
        }
        this.saldo += monto;

        this.historial.push(`Depósito: +${monto}`);
    }


    retirar(monto: number): void {

        if (monto <= 0) {
            console.log("El monto a retirar debe ser mayor a 0");
        }

        if (monto > this.saldo) {
            console.log("Saldo insuficiente");
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

const cuenta = new CuentaBancaria('Ana', 100);
console.log('Titular:', cuenta.titular);
console.log('Saldo inicial:', cuenta.consultarSaldo());
cuenta.depositar(50);
console.log('Saldo después de depositar 50:', cuenta.consultarSaldo());
cuenta.retirar(30);
console.log('Saldo después de retirar 30:', cuenta.consultarSaldo());
console.log('Historial:', cuenta.obtenerHistorial());