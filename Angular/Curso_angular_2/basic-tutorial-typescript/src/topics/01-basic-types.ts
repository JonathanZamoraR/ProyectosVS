//TypeScript tiene un sistema de tipado robusto, infiere el tipo de dato.
 
//TIPOS DE DATOS DE TS: number, string, boolean, DATE, any

//#region NUMBER
console.log('************************')
console.log('*********NUMBER*********')
console.log('************************')

const age = 15; //Constante -> el valor no puede ser modificado
console.log(age);


let weight = 70.5; //variable -> el valor si puede ser modificado
weight = 85;
console.log(weight);

let weight2:number; //Se puede declarar el tipo de dato
//console.log(weight2); UNDEFINED, no se le ha asignado un valor
weight2 = 10;
console.log(weight2);


const agetText = '31'; //tipo String
console.log('parseInt => ' , parseInt(agetText)); //convierte String a Int

const weightText = '70.5'; //tipo String
console.log('parseFloat => ', parseFloat(weightText)); //convierte String a float

console.log('Number => ', Number(weightText)); //convierte String a Number, entero o decimal


//#endregion


//#region STRING
console.log('**********************')
console.log('*********STRING*******')
console.log('**********************')

//Es redundante especificar el tipo de dato cuando ya lo inicializaste con un valor 
const name:String = 'Jonathan'; //const tipo String 
const lastName = 'Zamora';

console.log('Nombre: ' , name);
console.log('Apellido: ' , lastName);

console.log('****CONCATENACION****')

console.log(name+ ' ' +lastName) //forma 1

const fullName = `Template Literals (String Interpolation) => ${name} ${lastName}`; //Forma 2 CON INTERPOLACION
console.log(fullName);

//#endregion


//#region BOOLEAN
console.log('**********************')
console.log('*********BOOLEAN******')
console.log('**********************')

const useAngular:boolean = true;
const comparisionExpression = 5 > 2;

//Las cadenas NO vacias se consideran TRUE
//Las cadenas vacias se consideran FALSE

const booleanText = 'hola';

console.log('Usas Angular? ', useAngular);
console.log('Comparacion mediante una Expresion: 5 es mayor que 2? => ', comparisionExpression);
console.log('Convertir texto a boolean usando la funcion Boolean => ', Boolean(booleanText)); //EVALUA SI HAY CONTENIDO EN LA VARIABLE
console.log('Convertir texto a boolean usando doble negacion !! => ',  !!booleanText); //REALIZA LO MISMO 

//#endregion


//#region DATE
console.log('**********************')
console.log('********DATE**********')
console.log('**********************')

const dateNow = new Date(); //se crea una instancia (objeto) de tipo DATE()
console.log('La fecha de hoy es: ', dateNow); //imprime la fecha de hoy
console.log('El año es: ', dateNow.getFullYear()); //imprime el año
console.log('La hora es: ', dateNow.getHours()); //imprime la hora
console.log('El minuto es: ', dateNow.getMinutes()); //imprime el minuto
console.log('El dia es: ', dateNow.getDate()); //imprime el dia


//#endregion


//#region ANY
console.log('**********************')
console.log('********ANY**********')
console.log('**********************')

//Any acepta cualquier tipo de dato, No es recomendable utilizarlo
let valueAny:any = 'Hola Coders';
console.log('Valor ANY string: ', valueAny);

valueAny = 5;
console.log('Valor ANY numero: ', valueAny);
//#endregion



export{};