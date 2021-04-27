import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    editModeSwitcherAC,
    incClickCounterAC,
    maxValueChangeAC,
    resetClickCounterAC,
    setCounterAC,
    startValueChangeAC
} from "./bll/counter-reducer";

function App() {

    const clickCounter = useSelector<AppStateType, number>(state => state.counter.clickCounter);
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const onEdit = useSelector<AppStateType, boolean>(state => state.counter.onEdit);

    const dispatch = useDispatch()

    const incClickCounter = () => {
        dispatch(incClickCounterAC())
    }
    const startValueChange = (newStartValue: number) => {
        dispatch(startValueChangeAC(newStartValue))
    }
    const maxValueChange = (newMaxValue: number) => {
        dispatch(maxValueChangeAC(newMaxValue))
    }
    const resetClickCounter = () => {
        dispatch(resetClickCounterAC())
    }
    const setCounter = () => {
        dispatch(setCounterAC())
    }
    const editModeSwitcher = () => {
        dispatch(editModeSwitcherAC())
    }

    return (
        <div className="App">
            <Counter incClickCounter={incClickCounter}
                     resetClickCounter={resetClickCounter}
                     clickCounter={clickCounter}
                     maxValue={maxValue}
                     startValue={startValue}
                     onEdit={onEdit}
                     setClickCounter={setCounter}
                     maxValueChange={maxValueChange}
                     startValueChange={startValueChange}
                     editModeSwitcher={editModeSwitcher}
            />
        </div>
    );
}

export default App;
