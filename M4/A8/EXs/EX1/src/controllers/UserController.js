import { User } from "../model/UserModel.js"

let users = []

export function insertUser(name, email, password){
    const newUser = new User(name, email, password);
    users.push(newUser);
    return newUser;
}

export function getAllUsers(){
   return users;
}

export function getUserByName(name){
    const user = users.find(data => data.name === name);
    return user;
}