'use strict';

function Persona(nombre) {

    this.nombre = nombre;

    // this.saluda = function() {
    //     console.log('soy', this.nombre);
    // }
    
}

// pongo el metodo de saludar en el prototipo de las personas
Persona.prototype.saluda = function() {
    console.log('soy', this.nombre);
}

const maria = new Persona('Maria');
const paco = new Persona('Paco');

maria.saluda();
paco.saluda();

// Herencia de persona ------------------------------------------------------------

// Crear tipo Agente que herede de Persona

function Agente(nombre) {
    // heredar el constructor de Persona
    // llamar a Persona() con mi 'this'
    Persona.call(this, nombre); //similar a super()

}

// heredar las propiedades y metodos de las personas
// poner en el prototipo de los agentes, una persona
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente('Smith');

smith.saluda();

// Herencia multiple -----------------------------------------------------------------

function SuperHeroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    }
}

// Para que los agentes hereden tambien de los superheroes, uso el patron mixin(mezclar objetos)
//  o sea, copiar todas las propiedades de un superheroe al prototipo de los agentes
Object.assign(Agente.prototype, new SuperHeroe());

smith.vuela();

