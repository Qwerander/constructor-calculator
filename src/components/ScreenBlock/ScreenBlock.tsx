import { useAppSelector } from '../../store/hooks';
import { ScreenBlockStyled } from './ScreenBlock.styled';

export const ScreenBlock = () => {

    const screen = useAppSelector(state => state.calc.screen)
    const result = useAppSelector(state => state.calc.result)

    return (
        <ScreenBlockStyled>
            <div className='total'>
                {screen || result}
            </div>
        </ScreenBlockStyled>
    );
};