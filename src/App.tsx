import React from 'react'
import {CounterSettings} from "./counter/CounterSettings";
import {Counter} from "./counter/Counter";
import styled from "styled-components";
import {SmartCounter} from "./counter/SmartCounter";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {setSmartAC} from "./redux/counter-reducer";

function App() {

    const smart = useAppSelector(state => state.smart)
    const dispatch = useAppDispatch()

    const setSmart = () => {
        dispatch(setSmartAC(!smart))
    }

    return (
        <StyledApp smart={smart}>
            <button onClick={setSmart} className='smartButton'>
                {smart ? 'Turn Off Smart Counter' : 'Turn On Smart Counter'}
            </button>
            {smart
                ? <SmartCounter/>
                : <NotSmartCounter>
                    <CounterSettings/>
                    <Counter/>
                </NotSmartCounter>
            }
        </StyledApp>
    )
}

export default App

const StyledApp = styled.div<{smart: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: #392f59;
    width: 100%;
    height: 100vh;

    .smartButton {
        width: 200px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #000;
        cursor: pointer;
        color: #000;
        background-color: ${props => props.smart ? '#e02e2e' : '#7cff90'};
    }
    
    input {
        //border: none;
        border-radius: 10px;
        text-align: center;
    }
`

const NotSmartCounter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
`
