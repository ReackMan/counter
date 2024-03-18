import React, {FC, useEffect} from 'react';
import {Button} from "../button/Button";
import {StyledButtons} from "../button/StyledButton";
import {StyledCounter, StyledCounterValue} from "./StyledCounter";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setErrorAC, setValueAC} from "../redux/counter-reducer";

type CounterPropsType = {

}

export const Counter: FC<CounterPropsType> = (props) => {

    const value = useAppSelector(state => state.value)
    const minValue = useAppSelector(state => state.minValue)
    const maxValue = useAppSelector(state => state.maxValue)
    const error = useAppSelector(state => state.error)
    const incorrectValue = useAppSelector(state => state.incorrectValue)
    const isChangingNow = useAppSelector(state => state.isChangingNow)

    const dispatch = useAppDispatch()
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
        <StyledCounter>
            <h2>COUNTER</h2>
            <StyledCounterValue isChanging={isChangingNow} incorrectValue={incorrectValue}
                                error={error}>
                {isChangingNow ? incorrectValue ? 'Incorrect value' :
                    'enter values and press set' : value}
            </StyledCounterValue>
            <StyledButtons>
                <Button disabled={isChangingNow || maxValue === value}
                        onClick={incValue}>
                    inc
                </Button>
                <Button disabled={isChangingNow || minValue === value}
                        onClick={resetValue}>
                    reset
                </Button>
            </StyledButtons>
        </StyledCounter>
    );
};

