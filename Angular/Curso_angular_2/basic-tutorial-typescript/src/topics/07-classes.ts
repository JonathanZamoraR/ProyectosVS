class person{ //Creamos la clase persona

    //Modificadores de acceso determinan la visibilidad y el alcance de los atributos y metodos
    //PUBLIC -> Accesible dentro de su clase y desde otras clases o instancias
    //PRIVATE -> Solo accesible dentro de su clase
    //PROTECTED -> Accesible dentro de su clase y de sus clases heredadas


    //Declaramos variables(ATRIBUTOS)
    public name: string; 
    public lastName: string;
    private _age: number;
    protected _fullName: string;

    //Constructor sirve para inicilizar las variables y para solicitar parametros de ser necesario
    constructor(name:string, lastName:string, _age:number){
        //Inicializamos variables
        this.name = name;
        this.lastName = lastName; 
        this._age = _age;
        this._fullName = `${this.name} ${this.lastName}`;
    }

    //Creamos metodos(COMPORTAMIENTOS)
    walk():void{
        console.log(`${this.name} esta caminando`); //Se pueden acceder a las variables dentro del metodo
    };

    //Funcion para sacar el año de nacimiento: PRIVATE y solo se podra utilizar y ser visible dentro de su clase
     private _yearBirth(){
        const year = new Date();
        const yearBirth = year.getFullYear() - this._age;
        return yearBirth;

    }

    //Otro metodo(COMPORTAMIENTO)
    talk():void{
        console.log(`${this._fullName} esta hablando: "Naci en el año ${this._yearBirth()}"` );
    }
}

//Generamos una instancia de la clase Person
const Jonathan = new person('Jonathan', 'Zamora', 24); //Ingresamos los parametros del constructor
console.log("Instancia (person) JONATHAN", Jonathan); //Mostramos el objeto

// console.log(Jonathan._age) --> Variable NO disponible fuera de su clase por ser PRIVATE

Jonathan.walk(); //Ejecutamos el metodo walk() con el objeto creado
Jonathan.talk(); //Ejecutamos el metodo talk()