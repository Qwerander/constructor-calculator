import { OperatorsType } from "../store/calcSlice";

export const calculate = (value1: number, value2: number, operator: OperatorsType): number | 'Ошибка'=> {
    let result = 0;
    switch (operator) {
        case 'x':
            result = value1 * value2;
            return result.toString().length > 9 ? +result.toFixed(7).toString().slice(0, 9) : result
        case '+':
            result = value1 + value2;
            return result.toString().length > 9 ? +result.toFixed(7).toString().slice(0, 9) : result
        case '-':
            result = value1 - value2;
            return result.toString().length > 9 ? +result.toFixed(7).toString().slice(0, 9) : result
        case '/':
            if (value2 === 0) return 'Ошибка'
            result = value1 / value2;
            return result.toString().length > 9 ? +result.toFixed(7).toString().slice(0, 9) : result
        default:
            return result
    }    
}   