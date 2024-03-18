import React, {ChangeEvent, FC, useEffect} from 'react';
import styled from "styled-components";
import {Button} from "../button/Button";
import {StyledButtons} from "../button/StyledButton";
import {StyledCounterValue} from "./StyledCounter";
import {StyledInput, StyledMaxMinValues, StyledValuesChanger} from "./StyledCounterSettings";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {
    setErrorAC,
    setIncorrectValueAC,
    setIsChangingNowAC,
    setMaxValueAC,
    setMinValueAC,
    setOnSetAC,
    setValueAC
} from "../redux/counter-reducer";

type SmartCounterPropsType = {}

export const SmartCounter: FC<SmartCounterPropsType> = (props) => {

    const value = useAppSelector(state => state.value)
    const minValue = useAppSelector(state => state.minValue)
    const maxValue = useAppSelector(state => state.maxValue)
    const error = useAppSelector(state => state.error)
    const incorrectValue = useAppSelector(state => state.incorrectValue)
    const isChangingNow = useAppSelector(state => state.isChangingNow)
    const onSet = useAppSelector(state => state.onSet)

    const dispatch = useAppDispatch()
    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.currentTarget.value) > 9999999999) {
            dispatch(setIncorrectValueAC(true))
        } else {
            dispatch(setIsChangingNowAC(true))
            dispatch(setMinValueAC(parseInt(e.currentTarget.value)))
            dispatch(setValueAC(parseInt(e.currentTarget.value)))
        }
    }

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.currentTarget.value) > 9999999999) {
            dispatch(setIncorrectValueAC(true))
        } else {
            dispatch(setIsChangingNowAC(true))
            dispatch(setMaxValueAC(parseInt(e.currentTarget.value)))
            dispatch(setValueAC(minValue))
        }
    }

    const onSetHandler = () => {
        dispatch(setErrorAC(false))
        dispatch(setValueAC(value))
        dispatch(setIsChangingNowAC(false))
    }

    const setOnSetHandler = () => {
        dispatch(setOnSetAC(!onSet))
        onSetHandler()
    }

    const incValue = () => {
        if (maxValue === value + 1) {
            dispatch(setValueAC(value + 1))
            dispatch(setErrorAC(true))
        } else if (maxValue > value) {
            dispatch(setValueAC(value + 1))
        }
    }

    const resetValue = () => {
        dispatch(setErrorAC(false))
        dispatch(setValueAC(minValue))
    }

    useEffect(() => {
        resetValue()
    }, []);

    return (
        <FlexContainer>
            <StyledSmartCounter>
                <h2>SMART COUNTER</h2>
                {onSet
                    ?
                    <StyledCounterValue isChanging={isChangingNow} incorrectValue={incorrectValue}
                                        error={error}>
                        {isChangingNow ? incorrectValue ? 'Incorrect value' :
                            'enter values and press set' : value}
                    </StyledCounterValue>
                    :
                    <StyledMaxMinValues>
                        <StyledValuesChanger>
                            max value:
                            <StyledInput incorrectValue={incorrectValue} type="number" value={maxValue}
                                         onChange={onMaxValueChange}/>
                        </StyledValuesChanger>
                        <StyledValuesChanger>
                            min value:
                            <StyledInput incorrectValue={incorrectValue} type="number" value={minValue}
                                         onChange={onMinValueChange}/>
                        </StyledValuesChanger>
                    </StyledMaxMinValues>
                }

                <StyledButtons>
                    <Button disabled={isChangingNow || maxValue === value || !onSet}
                            onClick={incValue}>
                        inc
                    </Button>
                    <Button disabled={isChangingNow || !onSet || minValue === value}
                            onClick={resetValue}>
                        reset
                    </Button>
                    <Button disabled={incorrectValue}
                            onClick={setOnSetHandler}>
                        set
                    </Button>
                </StyledButtons>
            </StyledSmartCounter>
        </FlexContainer>
    );
};

const StyledSmartCounter = styled.div`
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
    
    @media screen and (max-width: 529px) {
        width: 95%;
    }
    @media screen and (max-width: 439px) {
        //max-width: 320px;
    }
    @media screen and (max-width: 424px) {
        //max-width: 320px;
    }
`
const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`