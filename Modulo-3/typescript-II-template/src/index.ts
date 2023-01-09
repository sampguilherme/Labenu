/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

// type TPerson = {
//   id: string,
//   name: string,
//   email: string,
//   password: string,
//   role: Role
// }

// const userOne:TPerson = {
//   id: "01",
//   name: "Guilherme",
//   email: "guilherme@email.com",
//   password: "12345",
//   role: "Normal"
// }

// const userTwo:TPerson = {
//   id: "02",
//   name: "GuilhermeSamp",
//   email: "guilherme23@email.com",
//   password: "12345",
//   role: "Admin"
// }


type AdminAccount = {
  account: string | number
  permission: boolean
}

type NormalAccount ={
  account: string | number
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
}


enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

const userOne:TPerson = {
  id: "01",
  name: "Guilherme",
  email: "guilherme@email.com",
  password: "12345",
  role: Role.ADMIN
}
  
const userTwo:TPerson = {
  id: "02",
  name: "GuilhermeSamp",
  email: "guilherme23@email.com",
  password: "12345",
  role: Role.NORMAL
  }

  console.table(userOne)
  console.table(userTwo)

  // 2.2 

type AdminUser = TPerson & AdminAccount

  const userThree: AdminUser  = {
  id: "03",
  name: "Geovanna",
  email: "geovanna@email.com",
  password: "12345",
  role: Role.ADMIN,
  account: "admin1",
  permission: true
  }

type NormalUser = TPerson & NormalAccount

const userFour: NormalUser  = {
  id: "04",
  name: "Guilherme",
  email: "guilherme@email.com",
  password: "12345",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}

console.table(userThree)
console.table(userFour)

//2.3

const arrayUser: AdminUser[] | NormalUser[] = [userThree, userFour]