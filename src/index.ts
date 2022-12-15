// console.log("Hola Mundo");

let message: string = "Hola Mundo"

message = "chanchito feliz"

console.log(message);

message= "chao mundo"

/**
 *  tipos de JS
 *  
 *  number
 *  string
 *  boolean
 *  null
 *  undefine
 *  object
 *  function
 *  
 *  tipos de TS
 *  
 *  any
 *  unknow
 *  never
 *  arrays
 *  tuplas
 *  Enums
 *  
 *  tipos inferidos
 *  
 *  
 */

let dinosaurExtintion = 76_000_000;
let favoriteDinosaur = "T-Rex";
let extintion = true;

//* This null the funtion of Typescript
// let myVariable;
// myVariable = "chanchito feliz";
// myVariable = 42;

function chanchitoFeliz(config: any) {
    return config
}

let animals: string[] = ['chanchito', 'feliz', 'felipe'];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// animals.map( x => x. ); autocomplete function works depends on the type

let tupla: [number, string[]] = [ 1, ['chanchito feliz', 'chanchito felipe'] ];
tupla.push(12); //this is an error that vsCode don't highlight

// Enums:

const small = 's';
const medium = 'm';
const large = 'l';
const extraLarge = 'xl';

enum Size { Small = 's', Medium = 'm', Large = 'l', ExtraLarge = 'xl' };

const variable1 = Size.Large;

console.log(variable1);


const enum LoadingState { Idle, Loading, Success, Error };

const state = LoadingState.Success;


type Direction = {
    number: number,
    street: string,
    country: string,
}

type Person = {
    readonly id: number,
    name: string,
    age?: number,
    size: Size,
    direction: Direction,
}

const object: Person = { 
    id: 1,
    name: 'Augusto', 
    size: Size.Medium,
    direction: {
        number: 175,
        street: 'evergreen',
        country: 'usa'
    }
}

const arr: Person[] = [] // Array that only can have objects