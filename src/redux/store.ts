import { AnyAction,legacy_createStore as createStore} from 'redux'
import {counterReducer, CounterStateType} from "./counter-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
//@ts-ignore
import {ThunkDispatch} from "redux-thunk";


function saveToLocalStorage(state: CounterStateType) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

// export let store = createStore(counterReducer)

export const store = createStore(counterReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppStateType = ReturnType<typeof counterReducer>

export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

//@ts-ignore
window.store = store