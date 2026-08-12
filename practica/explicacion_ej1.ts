// =====================================================
// 1. DEFINICIÓN DE LA CLASE
// =====================================================
// Una clase es una plantilla para crear objetos.
// Aquí definimos la clase "Producto" con sus atributos y métodos.
class Producto {

    // =================================================
    // 2. ATRIBUTOS (o propiedades)
    // =================================================
    // Los atributos son las características que tendrá cada producto.
    // Se declaran con su tipo (string, number, etc.)
    nombre: string;      // Nombre del producto (ej: "Camiseta")
    precio: number;      // Precio en unidades monetarias (ej: 20)
    categoria: string;   // Categoría a la que pertenece (ej: "Ropa")
    stock: number;       // Cantidad disponible en inventario

    // =================================================
    // 3. CONSTRUCTOR
    // =================================================
    // El constructor es un método especial que se ejecuta automáticamente
    // cuando creamos un objeto con "new Producto(...)".
    // Su función es inicializar los atributos con los valores que recibe.
    constructor(nombre: string, precio: number, categoria: string, stock: number) {
        // "this" se refiere al objeto que se está creando.
        // Asignamos cada parámetro al atributo correspondiente del objeto.
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    // =================================================
    // 4. MÉTODO: describir()
    // =================================================
    // Los métodos son funciones que definen el comportamiento de los objetos.
    // Este método devuelve un string con toda la información del producto.
    // No imprime nada, solo genera el texto para que quien llame al método
    // decida qué hacer con él (mostrarlo, guardarlo, etc.).
    describir(): string {
        // Usamos template strings (comillas invertidas ` `) para interpolar variables.
        // ${this.nombre} inserta el valor del atributo nombre del objeto.
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Categoria: ${this.categoria}, Stock: ${this.stock}`;
    }

    // =================================================
    // 5. MÉTODO: hayStock()
    // =================================================
    // Verifica si se puede vender una cantidad determinada sin que el stock
    // quede en negativo.
    // Devuelve true si es posible, false en caso contrario.
    hayStock(cantidad: number): boolean {
        // Comprueba dos condiciones:
        // 1. this.stock > 0  → que haya al menos 1 unidad disponible.
        // 2. cantidad <= this.stock → que lo pedido no supere lo que hay.
        // Si ambas se cumplen, devuelve true; si no, false.
        // El operador ternario (condición ? true : false) es una forma corta de if-else.
        return this.stock > 0 && cantidad <= this.stock ? true : false;
        // Nota: también podrías escribir simplemente:
        // return this.stock > 0 && cantidad <= this.stock;
        // porque esa expresión ya devuelve true o false.
    }

    // =================================================
    // 6. MÉTODO: venderUnidades()
    // =================================================
    // Intenta vender una cantidad de unidades del producto.
    // Si hay suficiente stock, descuenta la cantidad del stock y no devuelve nada.
    // Si no hay suficiente, muestra un mensaje de error en la consola.
    venderUnidades(cantidad: number): string | void {
        // Primero, consultamos si hay stock usando el método hayStock().
        // Guardamos el resultado en una variable para no llamar dos veces al método.
        const hayUnidades = this.hayStock(cantidad);
        
        if (hayUnidades) {
            // Si hay stock, restamos la cantidad vendida del stock actual.
            // this.stock = this.stock - cantidad; es equivalente a:
            this.stock -= cantidad;  // Forma abreviada de restar.
        } else {
            // Si no hay suficiente, mostramos un mensaje en consola.
            // Podríamos lanzar un error (throw new Error(...)) pero aquí optamos
            // por solo avisar con console.log.
            console.log('No hay stock disponible');
        }
        // Este método no devuelve nada explícitamente (void),
        // pero el tipo de retorno declarado es "string | void" por si en el futuro
        // quisiéramos devolver un mensaje. Tal como está, no retorna nada.
    }

    // =================================================
    // 7. MÉTODO: aplicarDescuento()
    // =================================================
    // Calcula el precio final después de aplicar un porcentaje de descuento.
    // Importante: NO modifica el precio original del producto, solo devuelve
    // el cálculo. Así podemos simular descuentos sin alterar los datos reales.
    aplicarDescuento(porcentaje: number): number | void {
        // Calculamos el monto del descuento: precio * (porcentaje / 100)
        // Ejemplo: si precio=20 y porcentaje=10 -> descuento = 20 * 0.1 = 2
        const descuento = this.precio * (porcentaje / 100);
        // Devolvemos el precio original menos el descuento.
        return this.precio - descuento;
    }
}; // <-- El punto y coma al final es opcional en TypeScript.

// =====================================================
// 8. CREACIÓN Y USO DE OBJETOS (prueba)
// =====================================================

// Creamos un objeto (instancia) de la clase Producto.
// Usamos "new" seguido del nombre de la clase y pasamos los argumentos.
// Estos argumentos serán recibidos por el constructor.
const p = new Producto("Camiseta", 20, "Ropa", 10);

// Llamamos al método describir() para ver la información del producto.
console.log(p.describir()); 
// Salida: "Nombre: Camiseta, Precio: 20, Categoria: Ropa, Stock: 10"

// Intentamos vender 3 unidades.
p.venderUnidades(3);
// Después de vender, el stock se reduce a 7.

// Mostramos el stock restante accediendo directamente al atributo.
console.log("Stock restante:", p.stock); // Stock restante: 7

// Aplicamos un descuento del 10% y mostramos el precio resultante.
console.log("Precio con 10% desc:", p.aplicarDescuento(10)); // Precio con 10% desc: 18
// Nota: el precio original sigue siendo 20, no se ha modificado.