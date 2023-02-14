export class User {
    private id: string
    private name: string 
    private email: string
    private password: string
    private createdAt: string

    // ações, funções --> METODOS
    constructor(id: string, name: string, email: string, password:string, createdAt:string){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = createdAt
    }

    public getId():string{
        return this.id
    }
    public setId(newId:string):void{
        this.id = newId
    }
    public getName():string{
        return this.name
    }
    public setName(newName:string):void{
        this.name = newName
    }
    public getEmail():string{
        return this.email
    }
    public setEmail(newEmail:string):void{
        this.email = newEmail
    }
    public getPassword():string{
        return this.password
    }
    public setPassword(newPassword:string):void{
        this.password = newPassword
    }
    public getCreatedAt():string {
        return this.createdAt
    }
    public setCreatedAt(newCreatedAt:string):void{
        this.createdAt = newCreatedAt
    }

}

//INSTANCIAR
const user1 = new User ("u001", "Fulano", "fulano@email.com", "fulaninho123", "30-01-2023")

