const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log("A string tem", minhaString.length, "caracteres sem remover os espaços do final")
console.log(minhaString.replace("________", "sticioso"))

console.log("-----------------------------------------------------------")

console.log(`A string tem ${minhaString.trim().length} caracteres removendo os espaços do final`)
console.log(minhaString.replace("________", "sticioso").trim())