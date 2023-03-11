import styled from 'styled-components';

type ButtonStyleType = {
    blue?: boolean
    zero?: boolean
}

export const ButtonStyled = styled.button<ButtonStyleType>`
    padding: 0;
    border: 1px solid #E2E3E5;
    border-radius: 6px;
    grid-column: ${((props) => props.zero ? '1 / 3' : '')};
    text-align: center;
    width: 100%;
    height: ${((props) => props.blue ? '64px' : '48px')};
    font-family: 'Inter';
    font-size: 14px;
    line-height: 15px;
    font-weight: 500;
    color: ${((props) => props.blue && '#fff')};
    background-color: ${((props) => props.blue ? '#5D5FEF' : '#fff')};
    transition: border .2s ease-in;
    &:hover {
        border: 2px solid #5D5FEF;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;