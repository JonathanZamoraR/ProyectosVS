//EL ARCHIVO CONTIENE LAS INTERFACES Y METODOS QUE SERAN EXPORTADOS

//CREAMOS INTERFACES Y METODOS QUE SERAN EXPORTADOS PARA QUE PUEDAN SER UTILIZADOS POR 
//OTROS COMPONENTES DEL PROYECTO

export interface ICustomer{ //se utiliza export para exportar la interfaz
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string,
        city: string,
        country: string
    };
}

export const showCustomData = (customer: ICustomer) => { //Se exporta el method
    console.log('**************************');
    console.log('****DATOS DEL CLIENTE*****');
    console.log('**************************');
    
    const {
        name,
        lastName,
        email,
        address: {description, city, country}
    } = customer;

    console.log('Nombre: ', name);
    console.log('Apellido: ', lastName);
    console.log('Email: ', email);
    console.log('----DIRECCION----');
    console.log('Direccion: ', description);
    console.log('Ciudad: ', city);
    console.log('Pais: ', country);
}