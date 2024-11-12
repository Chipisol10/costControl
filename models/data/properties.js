import 'dotenv/config.js';
import '../../config/database.js';
import Property from '../Property.js';

const propertyUsers = [
    { name: "Toyota", type: "SUV", value: 25000, user: "67326b5c2842fad787870e0f"},
    { name: "Honda", type: "Sedan", value: 22000, user: "67326b5c2842fad787870e0f"},
    { name: "Ford", type: "Truck", value: 30000, user: "67326b5c2842fad787870e0f"},
    { name: "Chevrolet", type: "Convertible", value: 27000, user: "67326b5c2842fad787870e0f"},
    { name: "Nissan", type: "Hatchback", value: 21000, user: "67326b5c2842fad787870e0f"},
    
    { name: 'Corsa', type: 'Sedan', value: 20000, user: "67326b5c2842fad787870e10"},
    { name: 'Toyota', type: 'SUV', value: 35000, user: "67326b5c2842fad787870e10"},
    { name: 'Mercedes', type: 'Camioneta', value: 45000, user: "67326b5c2842fad787870e10"},
    { name: 'Fiat', type: 'Deportivo', value: 60000, user: "67326b5c2842fad787870e10"},
    { name: 'Renualt', type: 'Hatchback', value: 18000, user: "67326b5c2842fad787870e10"},
    
    { name: 'Ford Mustang', type: 'Deportivo', value: 45000, user: "67326b5c2842fad787870e11"},
    { name: 'Toyota Corolla', type: 'Sedan', value: 22000, user: "67326b5c2842fad787870e11"},
    { name: 'Chevrolet Silverado', type: 'Camioneta', value: 50000, user: "67326b5c2842fad787870e11"},
    { name: 'Honda Civic', type: 'Hatchback', value: 20000, user: "67326b5c2842fad787870e11"},
    { name: 'Jeep Wrangler', type: 'SUV', value: 38000, user: "67326b5c2842fad787870e11"},

    { name: 'Casa en la playa', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e12"},
    { name: 'Departamento céntrico', type: 'Departamento', value: 250000, user: "67326b5c2842fad787870e12"},
    { name: 'Terreno rural', type: 'Terreno', value: 100000, user: "67326b5c2842fad787870e12"},
    { name: 'Local comercial', type: 'Local', value: 150000, user: "67326b5c2842fad787870e12"},
    { name: 'Casa de campo', type: 'Casa', value: 200000, user: "67326b5c2842fad787870e12"},

    { name: 'Inmobiliaria', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e13"},
    { name: 'Vehículos', type: 'Coche', value: 25000, user: "67326b5c2842fad787870e13"},
    { name: 'Joyas', type: 'Collar', value: 10000, user: "67326b5c2842fad787870e13"},
    { name: 'Inmobiliaria', type: 'Departamento', value: 200000, user: "67326b5c2842fad787870e13"},
    { name: 'Vehículos', type: 'Moto', value: 15000, user: "67326b5c2842fad787870e13"},

    { name: 'Inmobiliaria', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e14"},
    { name: 'Vehículos', type: 'Coche', value: 25000, user: "67326b5c2842fad787870e14"},
    { name: 'Joyas', type: 'Collar', value: 10000, user: "67326b5c2842fad787870e14"},
    { name: 'Inmobiliaria', type: 'Departamento', value: 200000, user: "67326b5c2842fad787870e14"},
    { name: 'Vehículos', type: 'Moto', value: 15000, user: "67326b5c2842fad787870e14"},

    { name: 'Inmobiliaria', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e15"},
    { name: 'Vehículos', type: 'Coche', value: 25000, user: "67326b5c2842fad787870e15"},
    { name: 'Joyas', type: 'Collar', value: 10000, user: "67326b5c2842fad787870e15"},
    { name: 'Inmobiliaria', type: 'Departamento', value: 200000, user: "67326b5c2842fad787870e15"},
    { name: 'Vehículos', type: 'Moto', value: 15000, user: "67326b5c2842fad787870e15"},
    
    { name: 'Inmobiliaria', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e16"},
    { name: 'Vehículos', type: 'Coche', value: 25000, user: "67326b5c2842fad787870e16"},
    { name: 'Joyas', type: 'Collar', value: 10000, user: "67326b5c2842fad787870e16"},
    { name: 'Inmobiliaria', type: 'Departamento', value: 200000, user: "67326b5c2842fad787870e16"},
    { name: 'Vehículos', type: 'Moto', value: 15000, user: "67326b5c2842fad787870e16"},

    { name: 'Inmobiliaria', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e17"},
    { name: 'Vehículos', type: 'Coche', value: 25000, user: "67326b5c2842fad787870e17"},
    { name: 'Joyas', type: 'Collar', value: 10000, user: "67326b5c2842fad787870e17"},
    { name: 'Inmobiliaria', type: 'Departamento', value: 200000, user: "67326b5c2842fad787870e17"},
    { name: 'Vehículos', type: 'Moto', value: 15000, user: "67326b5c2842fad787870e17"},

    { name: 'Inmobiliaria', type: 'Casa', value: 300000, user: "67326b5c2842fad787870e18"},
    { name: 'Vehículos', type: 'Coche', value: 25000, user: "67326b5c2842fad787870e18"},
    { name: 'Joyas', type: 'Collar', value: 10000, user: "67326b5c2842fad787870e18"},
    { name: 'Inmobiliaria', type: 'Departamento', value: 200000, user: "67326b5c2842fad787870e18"},
    { name: 'Vehículos', type: 'Moto', value: 15000, user: "67326b5c2842fad787870e18"}

  

];


  


  Property.insertMany(propertyUsers)
  