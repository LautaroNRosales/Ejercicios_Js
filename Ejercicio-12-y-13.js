//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. 
//Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor 
//edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
let personas = [
    { nombre: "Lucas", sexo: "masculino", edad: 21 },
    { nombre: "Lucia", sexo: "femenino", edad: 19 },
    { nombre: "Pablo", sexo: "masculino", edad: 17 },
    { nombre: "Ana", sexo: "femenino", edad: 15 },
    { nombre: "Marcelo", sexo: "masculino", edad: 13 }
];

function calcularPromedioEdad(lista) {
    let totalEdad = lista.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdad / lista.length;
}

function personaMasVieja(lista, sexo) {
    let personasSexo = lista.filter(persona => persona.sexo === sexo);
    let personaMayorEdad = personasSexo.reduce((personaMayor, personaActual) => {
        return (personaActual.edad > personaMayor.edad) ? personaActual : personaMayor;
    });
    return personaMayorEdad.nombre;
}

function personaMasJoven(lista, sexo) {
    let personasSexo = lista.filter(persona => persona.sexo === sexo);
    let personaMenorEdad = personasSexo.reduce((personaMenor, personaActual) => {
        return (personaActual.edad < personaMenor.edad) ? personaActual : personaMenor;
    });
    return personaMenorEdad.nombre;
}

function promedioEdadMujeres(lista) {
    let mujeres = lista.filter(persona => persona.sexo === "femenino");
    return calcularPromedioEdad(mujeres);
}

let promedioTotal = calcularPromedioEdad(personas);
console.log("Promedio de edad total:", promedioTotal);

let mujerMayorEdad = personaMasVieja(personas, "femenino");
console.log("Mujer con mayor edad:", mujerMayorEdad);

let hombreMenorEdad = personaMasJoven(personas, "masculino");
console.log("Hombre con menor edad:", hombreMenorEdad);

let promedioEdadMujeresTotal = promedioEdadMujeres(personas);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeresTotal);