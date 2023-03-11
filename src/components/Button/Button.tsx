import { FC, ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
    children: ReactNode
    blue?: boolean
    zero?: boolean
    handleClick: (value?: string) => void
}

export const Button: FC<ButtonProps> = ({ children, handleClick, ...props }) => {

    return (
        <ButtonStyled blue={props.blue} zero={props.zero} onClick={() => handleClick()}>
            {children}
        </ButtonStyled>
    );
};
