import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean, child: string }>`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    background-color: ${props => props.disabled ? '#a4a4a4' 
                                    : props.child === 'inc' 
                                        ? '#7cff90'
                                        : props.child === 'reset' 
                                            ? '#be2c2c' 
                                            : props.child === 'set' 
                                                            ? '#7cff90' 
                                                            : '#fff'};
`
export const StyledButtons = styled.div`
    padding: 10px;
    width: 400px;
    border: 3px solid #fff;
    border-radius: 10px;

    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: end;

    @media screen and (max-width: 439px) {
        width: 95%;
    }
`