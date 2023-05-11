import { TurnType } from "./turn.type";

export type employeeType = {
    id?: any;
    name?: string;
    avatar?: string;
    age?: number;
    phonenumber?: string;
    email?: string;
    address?: string;
    turns?: TurnType[] | undefined;
    skills?: any[],
    key?:string
}