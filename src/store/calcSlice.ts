import { PayloadAction, createSlice, } from "@reduxjs/toolkit";
import { calculate } from "../util/calculate";

export type OperatorsType = '+' | '-' | 'x' | '/' | null;

export enum CalcStatus {
    VALUE1 = 'value1',
    VALUE2 = 'value2'
}

export type CalcValueStatusType = CalcStatus.VALUE1 | CalcStatus.VALUE2

export type CalcStateType = {
    status: CalcValueStatusType
    value1: number
    value2: number
    result: number | 'Ошибка'
    screen: string
    operator: OperatorsType
}

export const initialState: CalcStateType = {
    status: CalcStatus.VALUE1,
    value1: 0,
    value2: 0,
    result: 0,
    screen: '',
    operator: null
}

const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        setValue1: (state, action: PayloadAction<{ value: string }>) => {
            const value = +((state.value1 + action.payload.value).slice(0, 9));
            state.value1 = value;
            state.screen = value.toString()

        },
        setValue2: (state, action: PayloadAction<{ value: string }>) => {
            const value = +((state.value2 + action.payload.value).slice(0, 9));
            state.value2 = value;
            state.screen = value.toString()
        },
        setStatus: (state, action: PayloadAction<{ status: CalcValueStatusType }>) => {
            state.status = action.payload.status
        },
        resetValue1: (state) => {
            state.value1 = 0
        },
        resetValue2: (state) => {
            state.value2 = 0
        },
        setOperator: (state, action: PayloadAction<{ operator: OperatorsType }>) => {
            state.operator = action.payload.operator
        },
        calculateResult: (state) => {
            const result = calculate(state.value1, state.value2, state.operator)
            state.result = result
            if (result !== 'Ошибка') {
                state.value1 = result
            }
        },
        resetResult: (state) => {
            state.result = 0;
        },
        setResult: (state, action: PayloadAction<{ value: number }>) => {
            state.result = action.payload.value
        },
        clearScreen: (state) => {
            state.screen = ''
        },
        resetOperator: (state) => {
            state.operator = null
        },
    }
})

export const {
    calculateResult,
    resetResult,
    resetValue1,
    resetValue2,
    setOperator,
    setStatus,
    setValue1,
    setValue2,
    setResult,
    clearScreen,
    resetOperator,
} = calcSlice.actions;


export default calcSlice.reducer;