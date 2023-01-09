/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum COLOR {
  RED = "vermelho",
  ORANGE = "laranja",
  YELLOW = "amarelo",
  GREEN = "verde",
  BLUE = "azul",
  ANIL = "anil",
  VIOLET = "violeta"
}

type TUser = {
  name: string
  age: number
  favoriteColor: COLOR
}

const peopleOne: TUser = {
  name: "Guilhrme",
  age: 20,
  favoriteColor: COLOR.RED
}
const peopleTow: TUser = {
  name: "Geovanna",
  age: 19,
  favoriteColor: COLOR.BLUE
}
const peopleThree: TUser = {
  name: "Rian",
  age: 21,
  favoriteColor: COLOR.VIOLET
}