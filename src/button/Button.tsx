import React, {FC} from 'react';
import {StyledButton} from "./StyledButton";

type ButtonPropsType = {
    disabled?: boolean
    onClick: () => void
    children: string
}

export const Button: FC<ButtonPropsType> = ({children, ...props}) => {

    return (
        <StyledButton child={children} {...props}>
            {children}
        </StyledButton>
    );
};

