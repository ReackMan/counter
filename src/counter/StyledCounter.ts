import styled from "styled-components";

export const StyledCounter = styled.div`
    width: 500px;
    height: 400px;
    border: 3px solid #fff;
    border-radius: 20px;

    display: flex;
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #ffffff
    }

    @media screen and (max-width: 439px) {
        width: 95%;
    }
`
export const StyledCounterValue = styled.div<{
    isChanging: boolean, incorrectValue: boolean,
    error: boolean
}>`
    display: flex;
    width: 400px;
    height: 160px;
    color: ${props => props.isChanging ?
            props.incorrectValue ? '#ff0000' : '#fff' : props.error ? '#ff0000'
                    : '#fff'};
    font-size: ${props => props.isChanging ? '30px' : '70px'};
    border: 3px solid #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 439px) {
        width: 95%;
        font-size: ${props => props.isChanging 
                ? ' calc((100vw - 2.5rem) / 12)' 
                : 'calc((100vw - 2.5rem) / 6)' };
    }
    @media screen and (max-width: 424px) {
        height: 120px;
    }
    @media screen and (max-width: 374px) {
        height: 100px;
    }
    @media screen and (max-width: 320px) {
        height: 80px;
    }
`