import React, {ChangeEvent, FC} from 'react';
import {Button} from "../button/Button";
import {StyledButtons} from "../button/StyledButton";
import {StyledCounterSettings, StyledInput, StyledMaxMinValues, StyledValuesChanger} from "./StyledCounterSettings";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {
    setErrorAC,
    setIncorrectValueAC,
    setIsChangingNowAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC
} from "../redux/counter-reducer";

type CounterSettingsPropsType = {}

export const CounterSettings: FC<CounterSettingsPropsType> = (props) => {

    const value = useAppSelector(state => state.value)
    const minValue = useAppSelector(state => state.minValue)
    const maxValue = useAppSelector(state => state.maxValue)
    const incorrectValue = useAppSelector(state => state.incorrectValue)
    const isChangingNow = useAppSelector(state => state.isChangingNow)

    const dispatch = useAppDispatch()
    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.currentTarget.value) > 9999999999) {
            dispatch(setIncorrectValueAC(true))
            dispatch(setIsChangingNowAC(true))
        } else {
            dispatch(setIsChangingNowAC(true))
            dispatch(setMinValueAC(parseInt(e.currentTarget.value)))
            dispatch(setValueAC(parseInt(e.currentTarget.value)))
        }
    }

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.currentTarget.value) > 9999999999) {
            dispatch(setIncorrectValueAC(true))
            dispatch(setIsChangingNowAC(true))
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

    return (
        <StyledCounterSettings>
            <h2>SETTINGS BLOCK</h2>
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
            <StyledButtons>
                <Button disabled={!isChangingNow || incorrectValue}
                        onClick={onSetHandler}>set</Button>
            </StyledButtons>
        </StyledCounterSettings>
    );
};

