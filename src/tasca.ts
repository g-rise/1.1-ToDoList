export type Tasca = {
    descripcio: string,
    completada: boolean
}

export class Llista {
    public tasques: Tasca[] = []

    buscarTasca(descripcio: Tasca["descripcio"]): number {
        return this.tasques.findIndex(item => item.descripcio === descripcio)
    }

    afegirTasca(descripcio: string) {
        // this.buscarTasca(tasca.descripcio) == -1 ? this.tasques.push(tasca) : console.log(`La tasca seleccionada ja està en la llista`)

        let posicio: number = this.buscarTasca(descripcio)
        if (posicio == -1) {
            const novaTasca: Tasca = {
                descripcio: descripcio,
                completada: false
            }
            this.tasques.push(novaTasca)
            console.log("La tasca s'ha afegit correctament")
        } else {
            console.log("Aquesta tasca ja existeix")
        }

    }

    eliminarTasca(descripcio: string) {
        let posicio: number = this.buscarTasca(descripcio)

        if (posicio != -1) {
            this.tasques.splice(posicio, 1)
            console.log("S'ha eliminat la tasca correctament")

        } else {
            console.log("La tasca que es desitja eliminar no existeix")

        }

    }

    completarTasca(descripcio: string) {
        let posicio: number = this.buscarTasca(descripcio)

        if (posicio != -1) {
            this.tasques[posicio].completada = !this.tasques[posicio].completada
        } else {
            console.log("Aquesta tasca no existeix")
        }

    }




    ensenyarTasques() {
        this.tasques.forEach(item => { console.log(`${this.tasques.indexOf(item) + 1}: ${item.descripcio}`) })
    }




}