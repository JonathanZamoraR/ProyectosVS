

class Persona{
    Name: any;
    Year: any;

    constructor(){
        this.pedirDatos();
    }

    private pedirDatos():void{
        this.Name = prompt('Ingresa tu nombre');
        this.Year= prompt('Ingresa tu año de nacimiento');
    }

    private calcularEdad(){
        const year = new Date();
        const edad = year.getFullYear() - this.Year; 
        return edad;

    }

    mostrarDatos():void{
        console.log(`Te llamas ${this.Name} y tienes ${this.calcularEdad()}`);
    }
}

const Person = new Persona();

Person.mostrarDatos();
