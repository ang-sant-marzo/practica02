// Tipos para datos primitivos

// Sintaxis de declaración

// let variable: tipo;

// string

let mensaje: string;

mensaje = 'Hola Mundo!';

// mensaje = 12;

// number

let resultado: number;
resultado = 9.5;

// boolean

let mayorEdad: boolean;
mayorEdad = true;

// Arrays 
// let variable: tipo-elemento[] ó let variable: Array<tipo-elemento>

let frutas: string[];
let vehiculos: Array<string>;

frutas = ['peras','naranjas'];

// Tipo any

let id: any = 2876; // Rompe la inferencia de tipo number y volvemos al tipado débil de JS

id = '06754';

// Tipado de funciones (parámetros y salida) incluyendo el tipo void

function suma(a: number, b: number, mensaje?: string): string {
    return mensaje ? mensaje + a + b : 'El resultado es ' + a + b;
}

function setMensaje(mensaje: string): void {
    console.log(mensaje);
}

// Tipo genérico en funciones (se define el tipo en la invocación de la función)

function devResultado<T> (a: T): T {
    return a;
}

const b = devResultado<string> ('Hola');
const c = devResultado<number> (1234);

// Tipos de unión

type _id = string | number;

let referencia: _id = 12;
referencia = '0123';

// Tipos de unión complejos

type razasPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razasPerro = 'Pastor Belga';

// Clases

class Jugador {
    public nombre: string;
    public apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }
}

let jugador1 = new Jugador('Lionel','Messi');

let jugadores: Array<Jugador>;

jugadores = [
    // {nombre: 'Cristiano', apellidos: 'Ronaldo'} // devuelve error porque debe ser instancia de Jugador
    jugador1,
]

// Constructor breve (sintaxis para clases)

class Player {
    constructor (public name: string, // debe llevar el modificador de acceso
                 public surname: string,
                 private goals: number) {

                 }
    setGoals(goals: number): void {
        this.goals = goals;
    }

    getGoals(): number {
        return this.goals;
    }
    
}

// Clases e interfaces

interface DatosMaestros {
    razonSocial: string;
    cif: string;
}

class Proveedor implements DatosMaestros {

    razonSocial: string;
    cif: string;
    formaPago: string;

    constructor(razonSocial: string, cif: string, formaPago: string) {
        this.razonSocial = razonSocial;
        this.cif = cif;
        this.formaPago = formaPago;
    }

    // ...

}

// Métodos accesores getter y setter (ECMA 2015)

class Cliente implements DatosMaestros {

    razonSocial: string;
    private _cif: string;
    formaPago: string;

    constructor(razonSocial: string, cif: string, formaPago: string) {
        this.razonSocial = razonSocial;
        this._cif = cif;
        this.formaPago = formaPago;
    }

    set cif (value: string) {
        this.cif = value;
    } 

    get cif () {
        return this.cif;
    }

}

let cliente1 = new Cliente('Gas Natural', 'A12345678', 'contado');

// Uso del set
cliente1.cif = 'A87654321';
// Uso del get
console.log(cliente1.cif);
