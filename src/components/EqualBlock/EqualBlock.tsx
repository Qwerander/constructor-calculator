import { Button } from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Mode } from '../../store/dragSlice';
import { CalcStatus, calculateResult, clearScreen, setStatus } from '../../store/calcSlice';

export const EqualBlock = () => {

    const dispatch = useAppDispatch()

    const mode = useAppSelector(state => state.drag.mode)
    const operator = useAppSelector(state => state.calc.operator)

    const handleClick = () => {
        if (mode === Mode.CALC) {
            if (operator !== null) {
                dispatch(calculateResult())
                dispatch(setStatus({ status: CalcStatus.VALUE1 }))
                dispatch(clearScreen())
            }
        }
    }

    return (
        <Button blue handleClick={() => handleClick()}>
            <div>
                =
            </div>
        </Button>
    );
};
