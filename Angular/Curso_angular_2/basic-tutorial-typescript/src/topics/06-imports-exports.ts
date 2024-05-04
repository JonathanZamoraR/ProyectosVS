//Importa la interfaz ICustomer y el method showCustomData  que esta en el archivo 'customer-utils.ts'
import { ICustomer, showCustomData } from "./utils/customer-util" 

const customer : ICustomer = { //Creamos un objeto con la interfaz que importamos
    name: 'Jonathan',
    lastName: 'Zamora Reyes',
    email: 'jonathan@gmail.com',
    address: {
        description: 'Tomas Valle #101', 
        city: 'Pachuca',
        country: 'Hidalgo'
    }   
}; 

//ejecutamos showCustomData y pasamos como parametro el objeto creado anteriormente
showCustomData(customer);



export{}