import { Role } from "./Role";

export class User {
    id: number;
    name: string;
    lastname: string;
    username: string;
    email:string;
    password:Date;
    number:string;
    roles:Role;
    birthDay:string;
    image:string;
}