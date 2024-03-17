import { Llista } from "./tasca";

import * as readline from 'readline';
var colors = require('colors');


// Crear interfície de lectura d'entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const novaLlista = new Llista()

function mostrarOpcions() {
    console.log(colors.blue("\nLlista de tasques"))
    console.log(colors.blue("Escull una de les següents opcions\n"))
    console.log(colors.cyan("1: Agregar una tasca a la llista"))
    console.log(colors.cyan("2: Eliminar una tasca de la llista"))
    console.log(colors.cyan("3: Marcar com completada una tasca"))
    console.log(colors.cyan("4: Ensenyar la llista de tasques"))
    console.log(colors.cyan("5: Salir de l'aplicació"))

}

function gestionarOpcions(opcio: string) {
    switch (opcio) {
        case "1":
            rl.setPrompt('Descriu la tasca que vols afegir: ')
            rl.prompt()
            rl.once('line', (input) => {

                novaLlista.afegirTasca(input)

                setTimeout(() => iniciarCLI(), 1000)

            })
            break;

        case "2":
            rl.setPrompt('Escriu la tasca que vols eliminar: ')
            rl.prompt()
            rl.on('line', (input) => {

                novaLlista.eliminarTasca(input)

                setTimeout(() => iniciarCLI(), 1000)

            })
            break;

        case "3":
            rl.setPrompt('Escriu la tasca que vols marcar com completada: ')
            rl.prompt()
            rl.once('line', (input) => {

                novaLlista.completarTasca(input)
                console.log(colors.green(`La tasca ${input} està completada`))
                console.log(novaLlista.tasques)

                iniciarCLI()

            })


            break;
        case "4":
            //rl.write(colors.bold.yellow("LLISTA DE TASQUES\n"))
            novaLlista.ensenyarTasques()
            setTimeout(() => {
                iniciarCLI()
            }, 2000)

            break;
        case "5":
            console.log("Estás sortint de la llista de tasques")
            rl.close()

            break;

        default:
            console.log("T'has equivocat d'opció. Torna a provar")
            iniciarCLI()

    }

}

function iniciarCLI() {

    mostrarOpcions()
    rl.question('-->', (opcio) => {
        gestionarOpcions(opcio)

    })
}

iniciarCLI()



// opcio !== '1' || opcio !== '2' || opcio !== '3' || opcio !== '4'