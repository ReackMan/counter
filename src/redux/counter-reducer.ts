const SET_VALUE = 'SET-VALUE'
const SET_MIN_VALUE = 'SET-MIN-VALUE'
const SET_MAX_VALUE = 'SET-MAX-VALUE'
const SET_ON_SET = 'SET-ON-SET'
const SET_ERROR = 'SET-ERROR'
const SET_INCORRECT_VALUE = 'SET-INCORRECT-VALUE'
const SET_IS_CHANGING_NOW = 'SET-IS-CHANGING-NOW'
const SET_SMART = 'SET-SMART'

type SetSmartAction = {
    type: 'SET-SMART'
    smart: boolean
}

type SetValueAction = {
    type: 'SET-VALUE'
    value: number
}

type SetMinValueAction = {
    type: 'SET-MIN-VALUE'
    minValue: number
}

type SetMaxValueAction = {
    type: 'SET-MAX-VALUE'
    maxValue: number
}

type SetOnSetAction = {
    type: 'SET-ON-SET'
    onSet: boolean
}

type SetErrorAction = {
    type: 'SET-ERROR'
    error: boolean
}

type SetIncorrectValueAction = {
    type: 'SET-INCORRECT-VALUE'
    incorrectValue: boolean
}

type SetIsChangingNowAction = {
    type: 'SET-IS-CHANGING-NOW'
    isChangingNow: boolean
}

export type CounterActionsType = SetValueAction | SetMinValueAction | SetMaxValueAction | SetOnSetAction |
    SetErrorAction | SetIncorrectValueAction | SetIsChangingNowAction | SetSmartAction

export type CounterStateType = {
    smart: boolean
    value: number
    minValue: number
    maxValue: number
    onSet: boolean
    error: boolean
    incorrectValue: boolean
    isChangingNow: boolean
}

let initialState: CounterStateType = {
    smart: false,
    value: 0,
    minValue: 0,
    maxValue: 5,
    onSet: false,
    error: false,
    incorrectValue: false,
    isChangingNow: false,
}

export let counterReducer = (state: CounterStateType = initialState, action: CounterActionsType): CounterStateType => {
    switch (action.type) {
        case SET_VALUE: {
            return {...state, value: action.value}
        }
        case SET_MIN_VALUE: {
            if (action.minValue < 0 || action.minValue >= state.maxValue) {
                return {...state, minValue: action.minValue,
                    incorrectValue: true}
            } else return {...state, minValue: action.minValue,
                incorrectValue: false}
        }
        case SET_MAX_VALUE: {
            if (state.minValue >= action.maxValue) {
                return {...state, maxValue: action.maxValue,
                    incorrectValue: true}
            } else return {...state, maxValue: action.maxValue,
                incorrectValue: false}
        }
        case SET_ON_SET: {
            return {...state, onSet: action.onSet}
        }
        case SET_ERROR: {
            return {...state, error: action.error}
        }
        case SET_INCORRECT_VALUE: {
            return {...state, incorrectValue: action.incorrectValue}
        }
        case SET_IS_CHANGING_NOW: {
            return {...state, isChangingNow: action.isChangingNow}
        }
        case SET_SMART: {
            return {...state, smart: action.smart}
        }
        default:
            return state
    }
}

export const setValueAC = (value: number): SetValueAction => ({
    type: SET_VALUE, value
})
export const setMinValueAC = (minValue: number): SetMinValueAction => ({
    type: SET_MIN_VALUE, minValue
})
export const setMaxValueAC = (maxValue: number): SetMaxValueAction => ({
    type: SET_MAX_VALUE, maxValue
})
export const setOnSetAC = (onSet: boolean): SetOnSetAction => ({
    type: SET_ON_SET, onSet
})
export const setErrorAC = (error: boolean): SetErrorAction => ({
    type: SET_ERROR, error
})
export const setIncorrectValueAC = (incorrectValue: boolean): SetIncorrectValueAction => ({
    type: SET_INCORRECT_VALUE, incorrectValue
})
export const setIsChangingNowAC = (isChangingNow: boolean): SetIsChangingNowAction => ({
    type: SET_IS_CHANGING_NOW, isChangingNow
})
export const setSmartAC = (smart: boolean): SetSmartAction => ({
    type: SET_SMART, smart
})
