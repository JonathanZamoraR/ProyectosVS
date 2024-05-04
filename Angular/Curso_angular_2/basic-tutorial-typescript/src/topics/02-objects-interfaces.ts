//INTEFACES -> modelo de datos, una plantilla de los atributos que llevaran los objetos 
interface IPerson{
        name : string;
        lastName : string;
        age : number;
};

interface IStudent extends IPerson{ //Nueva interfaz que hereda los atributos de IPerson
    career : string;
    university : string;
};

//OBJECTS -> Coleccion de datos y se crean a partir de una interfaz. La interfaz no genera instancia.
const Jonathan : IPerson = {  //Objeto
    name: 'Jonathan',         //Atributos
    lastName: 'Zamora',
    age: 23
};
console.log(Jonathan); //Visualizamos el objeto

const StudentJuan : IStudent = { //Creamos un objeto en base a las 2 interfaces
    name: 'Juan',
    lastName: 'Reyes',
    age: 20,
    career: 'Ingenieria Quimica',
    university: 'Instituto Tecnologico de Pachuca'
};

console.log( `Datos del estudiante ${StudentJuan.name} ${StudentJuan.lastName}`); //Accedemos a los datos del objeto
console.log( `Tiene ${StudentJuan.age} años`); //Accedemos a los datos del objeto
console.log( `Estudia ${StudentJuan.career}`); //Accedemos a los datos del objeto
console.log( `En el ${StudentJuan.university}`); //Accedemos a los datos del objeto

console.log(StudentJuan); //Accede a todos los datos del objeto





export{}