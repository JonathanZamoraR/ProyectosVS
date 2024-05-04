//ARRAYS

const element: any[] = []; //Array de tipo ANY 

const element2: number[] = [2]; //Array tipo NUMBER
console.log(element2);

const element3 = [10, 'Hola', false, {name: 'Julio'}]; //Array de tipado multiple 
console.log(element3);

const message: string[] = ['Hello', 'Coders']; //Array tipo String, se debe de especificar el tipo de dato
console.log('Message: ', message);


//creamos una interfaz
interface IPet{
    name: string,
    age: string
    species: string,
    isFemale: boolean,  //Para saber si es hembra
    vaccines: string[]  //Creamos un array como atributo dentro de una interfaz para un objeto  
}

//Creamos objetos con datos de mascotas
const petFirulay: IPet = {
    name: 'Firulay',
    age: '15 años',
    species: 'Perro',
    isFemale: false,
    vaccines: ['Rabia']
};

const petKitty: IPet = {
    name: 'Kitty',
    age: '8 años',
    species: 'Gato',
    isFemale: true,
    vaccines: ['Rabia', 'Distemper']
};

const petPaula: IPet = {
    name: 'Paula',
    age: '8 años',
    species: 'Loro',
    isFemale: true,
    vaccines: ['Rabia']
};


//array con los objetos que creamos anteriormente
const pets: IPet[] = [petFirulay, petKitty, petPaula];

//Visualizamos el array
console.log('MASCOTAS: ', pets);


//Creamos una funcion con filter() para mostrar a las mascotas hembras
const petFemale =  pets.filter((pet) => {
    return pet.isFemale;
});
console.log('Mascotas Hembras',petFemale);

//Otras funciones con filter
const petVaccine1 = pets.filter((pet) => {
    return pet.vaccines.length === 1;
})
console.log('Mascotas con una vacuna: ',petVaccine1);

const petMale = pets.filter((pet) => {
    return pet.isFemale == false;
})
console.log('Mascotas Machos: ',petMale);


export{};