import { employeeType } from "./employee.type";

export type TurnType = {
    id: string;
    price: string;
    start_at: Date | string;
    end_at: Date | string;
    tip: string;
    status?: number;
    services: string;
    is_done: boolean;
    employeeInfo?: employeeType

}