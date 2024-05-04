console.log('************************')
console.log('*******METHODS*********')
console.log('************************')

//Method -> function que NO retorna nada
function showMessage() : void {
    console.log('Hello Coders');    
}
showMessage(); //llamos al metodo 

//Method que se almacena en una constante y solicita un parametro
const greet = (name: string): void => {
    console.log(`Hola ${name}`);    
};
greet('Jonathan'); //ejecutamos el method

console.log('************************')
console.log('*****FUNCTIONS*****')
console.log('************************')

//Function -> SI retorna algo.
function suma(a:number, b:number){ //solicita dos parametros
    return a + b; //devuelve la suma de a + b
};

const suma2 = (a:number, b:number) => { //creamos la misma funcion para almacenarla en una constante
    return a + b;
};

console.log(`1 - Suma de numeros = ${suma(10, 2)}` );
console.log(`2 - Suma de numeros = ${suma2(5, 15)}` );

//EN CASO DE QUE LOS METODOS O FUNCIONES REQUIERAN DE VARIOS PARAMETROS LO IDEAL ES PASAR TODO POR UN OBJETO

//Mala practica :(
const showStudentData = (
    name: string,
    lastName: string,
    age: number, 
    career: string,
    university: string,
    cycle: number
) => {
    console.log('***LOS DATOS DEL ESTUDANTE SON LOS SIGUIENTES***');
    console.log('Nombre: ', name);
    console.log('Apellido: ', lastName);
    console.log('Edad: ', age);
    console.log('Carrera: ', career);
    console.log('Universidad: ', university);
    console.log('Ciclo Actual: ', cycle);
}
showStudentData('Jonathan', 'Zamora', 23, 'Ing. Sistemas', 'ITP', 7); //llamamos al metodo y pasamos parametros


//Buena Practica =)

//Creamos interfaces
interface IPerson{
    name: string,
    lastName: string,
    age: number,
}

interface IStudent extends IPerson{
    career: string,
    university: string,
    cycle?: number //Se utiliza ? para que el atributo sea opcional 
}

//Creamos un objeto en base a las interfaces creadas
const studentJonathan: IStudent = {
    name: 'Jonathan',
    lastName: 'Zamora',
    age: 23,
    career: 'Ing. Sistemas',
    university: 'ITP'
}

//Creamos el Method para mostrar los datos del objeto
const showStudent = (data: IStudent) => {
    console.log('***LOS DATOS DEL ESTUDANTE SON LOS SIGUIENTES***');
    console.log('Nombre: ', data.name);
    console.log('Apellido: ', data.lastName);
    console.log('Edad: ', data.age);
    console.log('Carrera: ', data.career);
    console.log('Universidad: ', data.university);
    console.log('Ciclo Actual: ', data.cycle);  
}

showStudent(studentJonathan); //llamamos al method y le pasamos como parametro el objeto



export{}