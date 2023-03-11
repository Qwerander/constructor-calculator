import styled from 'styled-components';
import background from './assets/img/dropFieldFull.svg';
import { Mode, ModeOrId } from './store/dragSlice';


export const AppStyled = styled.div<{mode: ModeOrId}>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    .container {
        margin: 0 auto;
        max-width: 1280px;
    }
    .main {
        position: relative;
        display: flex;
        gap: 30px;
    }
        
    .constructor,
    .calc {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 240px;
        width: fit-content; 
    }

    .calc {
        background-image: url(${((props) => props.mode === Mode.CONSTRUCTOR ? background : '')});
        background-repeat: no-repeat;
        background-size: cover;
    }

    .calc.empty {
        background-color: #f0f9ff
    }
`;


