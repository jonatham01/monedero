import { Valor } from "./valor.model"

export interface Moneda{
    mil:Valor,
    quinientos:Valor,
    doscientos:Valor,
    cien:Valor,
    cincuenta:Valor,
    fecha:Date
    total:number
}