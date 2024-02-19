import { User } from "./UserModel.js";

class Adm extends User{
    constructor(name, email, password, store){
        super(name, email, password);
        this.store = store;
    }
}

export { Adm }