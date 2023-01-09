import { countries } from "./countries.js";

const name =  process.argv[2]
const code = process.argv[3]

if(!name || !code){
    console.log("Insira o nome e/ou o code do país")
} else {
    const newCountry = {
        name,
        code
    }

    countries.unshift(newCountry)
    console.log(countries[0])
}