import { Llista } from "./tasca";

// Instanciar l'objecte llista de la classe Llista
const llista = new Llista()


console.log(llista)

//Afegir tasques a la llista
llista.afegirTasca("Mangiare la pizza")
llista.afegirTasca("Bere tanto vino")

console.log(llista)

// Ensenyar per consola la llista de tasques
llista.ensenyarTasques()

// Comprovar la cerca d'una tasca
console.log(llista.buscarTasca("Bere un Negroni"))

// Afegir una tasca ja existent
llista.afegirTasca("Bere tanto vino") // No s'afegirà a la llista
llista.afegirTasca("Bere un Negroni")

llista.ensenyarTasques()

// Eliminar tasca de la llista
llista.eliminarTasca("Bere tanto vino")

// Completar una tasca
llista.completarTasca("Bere un Negroni")
console.log(llista)