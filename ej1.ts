class Producto {

    nombre: string;
    precio: number;
    categoria: string;
    stock: number;

    constructor(nombre: string, precio: number, categoria: string, stock: number) {
            this.nombre = nombre;
            this.precio = precio;
            this.categoria = categoria;
            this.stock = stock;
        }
    describir(): string {
        
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Categoria: ${this.categoria}, Stock: ${this.stock}`;
    }
    hayStock(cantidad: number): boolean {
        return this.stock > 0 && cantidad <= this.stock ? true : false
    }
    venderUnidades(cantidad: number): string | void {
        
        const hayUnidades = this.hayStock(cantidad);
        
        if(hayUnidades){
            this.stock = this.stock - cantidad;
        } else {
            console.log('No hay stock disponible')
        }
    }
    aplicarDescuento(porcentaje: number): number | void{
        const descuento = this.precio * (porcentaje / 100)
        return this.precio - descuento
    }
};