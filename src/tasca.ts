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

        if (this.buscarTasca(descripcio) == -1) {
            const novaTasca: Tasca = {
                descripcio: descripcio,
                completada: false
            }
            this.tasques.push(novaTasca)
        } else {
            console.log("Aquesta tasca ja existeix")
        }

    }

    eliminarTasca(descripcio: string) {
        if (this.buscarTasca(descripcio) != -1) {
            this.tasques.splice(this.buscarTasca(descripcio), 1)
            console.log("S'ha eliminat la tasca correctament")

        } else {
            console.log("La tasca que es desitja eliminar no existeix")

        }

    }

    completarTasca(descripcio: string) {
        if (this.buscarTasca(descripcio) != -1) {
            this.tasques[this.buscarTasca(descripcio)].completada = !this.tasques[this.buscarTasca(descripcio)].completada
        }

    }




    ensenyarTasques() {
        this.tasques.forEach(item => { console.log(`${this.tasques.indexOf(item) + 1}: ${item.descripcio}`) })
    }




}