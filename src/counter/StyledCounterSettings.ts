import styled from "styled-components";

export const StyledCounterSettings = styled.div`
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
export const StyledMaxMinValues = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    height: 160px;
    border: 3px solid #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 439px) {
        width: 95%;
    }
    @media screen and (max-width: 374px) {
        height: 120px;
    }
`
export const StyledValuesChanger = styled.div`
    display: flex;
    gap: 50px;
    font-size: 30px;
    color: #fff;

    @media screen and (max-width: 439px) {
        gap: 30px;
    }
    @media screen and (max-width: 374px) {
        gap: 10px;
        font-size: calc((75vw - 4.5rem) / 7);
    }
`
export const StyledInput = styled.input<{ incorrectValue: boolean }>`
    text-align: center;
    width: 150px;
    height: 35px;
    border: 3px solid ${props => props.incorrectValue ? '#ff0000' : '#7cff90'};
    border-radius: 5px;
    //margin-left: 50px;
`