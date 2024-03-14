import { Llista } from "../tasca";

describe('Llista', () => {
    let llistaTest: Llista; // Declarem una variable aquí perquè estigui disponible en tots els tests

    beforeEach(() => {
        // Aquest codi s'executarà abans de cada test
        llistaTest = new Llista(); // Inicialitzem una nova instància de Llista
    });


    it('Hauria de crear una class Llista amb una propietat igual a un array buid', () => {
        expect(llistaTest).toEqual({ tasques: [] })
    })

    it('Hauria d afegir una tasca a la propriedat tasques si no existeix ja', () => {
        llistaTest.afegirTasca("Ciccio")
        expect(llistaTest.tasques[0].descripcio).toBe("Ciccio")
        llistaTest.afegirTasca("Bomba")
        expect(llistaTest.tasques[1].descripcio).toBe("Bomba")
        llistaTest.afegirTasca("Ciccio")
        expect(llistaTest.tasques[2]).toBeUndefined

    })

    it('Hauria de eliminar una tasca si la tasca existeix', () => {
        llistaTest.afegirTasca("Ciccio")
        llistaTest.eliminarTasca("Ciccio")
        expect(llistaTest.tasques).toEqual([])
        llistaTest.afegirTasca("Ciccio")
        llistaTest.eliminarTasca("Bomba")
        expect(llistaTest.tasques.length).toBe(1)

    })

    it('Hauria de poder canviar l estat de una tasca de false a true', () => {
        llistaTest.afegirTasca("Ciccio")
        llistaTest.completarTasca("Ciccio")
        expect(llistaTest.tasques[0].completada).toBe(true)
        llistaTest.completarTasca("Ciccio")
        expect(llistaTest.tasques[0].completada).toBe(false)
    })

    it('Hauria de poder buscar si una tasca existeix ja o no', () => {
        llistaTest.afegirTasca("Ciccio")
        expect(llistaTest.buscarTasca("Ciccio")).toBe(0)
        expect(llistaTest.buscarTasca("Bomba")).toBe(-1)

    })

    it('Hauria de poder ensenyar per consola una llista amb todes les tasques', () => {
        llistaTest.afegirTasca("Ciccio")
        expect(llistaTest.ensenyarTasques()).toBeNaN
        expect(llistaTest.ensenyarTasques()).toBe(console.log("1: Ciccio"))
    })


})