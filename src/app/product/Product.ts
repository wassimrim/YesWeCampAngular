import { User } from "../profile/User";

export class Product{
    id:number;
    description:string;
    labelle:string;
    prix:number;
    quantite:number;
    image:string
    user:User;
}