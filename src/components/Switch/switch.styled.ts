import styled from 'styled-components';


export const SwitchStyled = styled.div`
    position: absolute;
    display: flex;
    padding: 1px 1px;
    align-items: center;
    border-radius: 6px;
    height: 38px;
    width: 243px;
    right: 0;
    top: -60px;
    background: #F3F4F6;
    overflow: hidden;
    cursor: pointer;
    gap: 5px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: center;
        width: 50%;
        height: 100%;
        font-family: 'Inter';
        font-size: 14px;
        line-height: 100%;
        &.active {
            background-color: #fff;
            svg {
                stroke: #5D5FEF;
            }
        }
    }
    svg {
        stroke: #4D5562;
        margin-right: 10px    
    }
`;