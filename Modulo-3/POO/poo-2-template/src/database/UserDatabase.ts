import { TUserDB } from "../types";
import { BaseDatabse } from "./BaseDatabase";

export class UserDatabase extends BaseDatabse{
    public static TABLE_USERS = "users"
    dadosConnection = BaseDatabse.connection

    public async findUsers(q: string | undefined): Promise<TUserDB[]>{
        let usersDB

        if (q) {
            const result: TUserDB[] = await this.dadosConnection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)

            usersDB = result
        } else {
            const result: TUserDB[] = await this.dadosConnection("users")
            usersDB = result
        }
        return usersDB
    }
    
    public async findUserById(id: string | undefined): Promise<TUserDB | undefined>{
        const [ userDBExists ]: TUserDB[] | undefined[] = await this
            .dadosConnection(UserDatabase.TABLE_USERS)
            .where({ id })
        return userDBExists
    }

    public async insertUser(newUserDB: TUserDB): Promise<void>{
        
    }
}