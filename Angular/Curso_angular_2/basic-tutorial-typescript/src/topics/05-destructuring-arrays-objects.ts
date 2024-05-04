console.log('************************')
console.log('*******OBJECT*********')
console.log('************************')


interface ICustomer{
    name: string,
    lastName: string,
    email:string,
    address: {  //Se crea un objeto dentro de una interfaz
        description: string,
        city: string,
        country: string
    }
}

const customerMelani: ICustomer = { //Creamos el objeto en una constante
    name: 'Melani',
    lastName: 'Figeroa Santos',
    email: 'mfigeroa@gmail.com',
    address: { description: 'Av. Juan Lecaros 128', city: 'Lima', country: 'Peru' }
};

//Mostramos los datos
console.log('Nombre: ', customerMelani.name);                                                                                                    
console.log('Apellido: ', customerMelani.lastName);
console.log('E-mail: ', customerMelani.email);
console.log('Nombre: ', customerMelani.name);
console.log('City: ', customerMelani.address.city); //Accedemos al objeto de la interfaz con . hasta llegar al atributo deseado
console.log('Pais: ', customerMelani.address.country);
console.log('Direccion: ', customerMelani.address.description);


console.log('************************')
console.log('***DESTRUCTURING*****') //NOS PERMITE ACCEDER A LAS VARIABLES DE UN OBJETO
console.log('************************')

//OTRA MANERA DE ACCEDER A LAS VARIABLES DE UN OBJETO ES UTILIZANDO LA 'DESTRUCTURACION' 
const {
    name, 
    lastName, 
    address:{city, country}
} = customerMelani; //Obtenemos las variables que necesitemos del objeto CUSTOMER

console.log('Nombre: ', name); //Las mostramos de una manera mas facil
console.log('Apellido: ', lastName);
console.log('Ciudad: ', city);
console.log('Pais: ', country);

//EJEMPLO 2

const pokemons: string[] = ['Pikachu', 'Charizard']; //Creamos un arreglo
console.log('pokemon 2: ', pokemons[1]); //Accedemos al elemento del indice 1

//Utilizando la destructuracion podemos acceder a los elementos de un arreglo
const [poke1, poke2] = pokemons; //Creamos variables para hacer referencia a los elementos del arreglo POKEMONS
//Imprimimos
console.log('Pokemon 1: ', poke1); //Poke1 = elemento de la posicion 0 del arreglo
console.log('Pokemon 2: ', poke2);//Poke2 = elemento de la posicion 1 del arreglo

//Si solo queremos el elemento de la posicion 1 del arreglo utilizamos:  const [ , poke2] = pokemons; 

const [ , , poke3] = pokemons; //Accedemos a la posicion 2 del arreglo
console.log('Pokemon 3: ', poke3); 


const [ , , , poke4 = 'Pokemon agregado'] = pokemons; //Se puede agregar un nuevo elemento al arreglo
console.log('Pokemon 4: ', poke4); 




export{}