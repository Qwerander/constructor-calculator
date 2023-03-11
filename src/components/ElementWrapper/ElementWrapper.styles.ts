import styled from "styled-components";
import { Mode, ModeOrId } from "../../store/dragSlice";

type ElementWrapperStyledType = {
    isRemoved?: boolean
    mode: ModeOrId
}

export const ElemetWrapperStyled = styled.div<ElementWrapperStyledType>`
    .wrapper,
    .wrapper-calc {
        position: relative; 
        padding: 4px;
        border-radius: 4px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
        cursor: ${(props) => props.isRemoved || props.mode === Mode.CALC  ? 'default' : 'grab'};
        opacity: ${(props) => props.isRemoved ? 0.5 : 1};
    }

    .wrapper-calc:after {
        content: '';
        display: block;
        position: absolute;
        width: 110%;
        height: 1px;
        bottom: -7px;
        left: -5%;
        background-color: #5D5FEF;
        opacity: 0;
        z-index:5;
    }

    .wrapper-calc.active::after {
        opacity: 1;

    }
`;