import { NumbersBlockStyled } from './NumbersBlock.styled';
import { Button } from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Mode } from '../../store/dragSlice';
import { CalcStatus, resetOperator, resetValue1, setValue1, setValue2 } from '../../store/calcSlice';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

export const NumbersBlock = () => {

    const dispatch = useAppDispatch()

    const mode = useAppSelector(state => state.drag.mode)
    const calcStatus = useAppSelector(state => state.calc.status)
    const operator = useAppSelector(state => state.calc.operator)

    const handleClick = (number: string) => {
        if (mode === Mode.CALC) {
            if (operator !== null && calcStatus === CalcStatus.VALUE1) {
                dispatch(resetValue1())
                dispatch(resetOperator())
            }

            calcStatus === CalcStatus.VALUE1 && dispatch(setValue1({ value: number }))
            calcStatus === CalcStatus.VALUE2 && dispatch(setValue2({ value: number }))
        }
    }

    return (
        <NumbersBlockStyled>
            {numbers.map(number => (
                <Button
                    key={number}
                    zero={Number(number) === 0}
                    handleClick={() => handleClick(number)}>
                    <div>
                        {number}
                    </div>
                </Button>
            ))}
        </NumbersBlockStyled>
    );
};
