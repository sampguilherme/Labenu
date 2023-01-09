import { frota } from "./frota"

export type TCarro = {marca: string, modelo: string, ano: number}

function buscarCarrosPorMarca(frota: TCarro[], marcaEscolhida: string): TCarro[] {
  if (marcaEscolhida === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marcaEscolhida
    }
  )
} 

console.log(buscarCarrosPorMarca(frota,"Ford"))