import { OperatorBlockStyled } from './OperatorBlock.styled';
import { Button } from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Mode } from '../../store/dragSlice';
import { 
    CalcStatus,
    OperatorsType, 
    calculateResult, 
    clearScreen, 
    resetValue2, 
    setOperator, 
    setResult, 
    setStatus 
} from '../../store/calcSlice';

const operators: OperatorsType[] = ['+', '-', 'x', '/']

export const OperatorBlock = () => {

    const dispatch = useAppDispatch()
    
    const mode = useAppSelector(state => state.drag.mode)
    const status = useAppSelector(state => state.calc.status)
    const value1 = useAppSelector(state => state.calc.value1)

    const handleClick = (operator: OperatorsType) => {
        if (mode === Mode.CALC) {
            
            if (status === CalcStatus.VALUE1) {
                dispatch(setOperator({ operator }))
                dispatch(clearScreen())
                dispatch(setStatus({ status: CalcStatus.VALUE2 }))
                dispatch(setResult({ value: value1 }))
                dispatch(resetValue2())
            }
            if (status === CalcStatus.VALUE2) {
                dispatch(clearScreen())
                dispatch(calculateResult())
                dispatch(resetValue2())
                dispatch(setOperator({ operator }))
            }
        }
    }

    return (
        <OperatorBlockStyled>
            {operators.map(operator => (
                <Button key={operator} handleClick={() => handleClick(operator)}>
                    <div>
                        {operator}
                    </div>
                </Button>
            ))}
        </OperatorBlockStyled>
    );
};
