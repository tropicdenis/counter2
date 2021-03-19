import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import SetUp from "./Components/SetUp/SetUp";


function App() {

    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [clickCounter, setClickCounter] = useState<number>(0);
    let [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        let clickCounterAsString = localStorage.getItem('clickCounter')
        if (clickCounterAsString) {
            let newClickCounter = JSON.parse(clickCounterAsString)
            setClickCounter(newClickCounter)
        }
    }, [])
    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }, [])



    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('clickCounter', JSON.stringify(clickCounter))
    }, [clickCounter])

    function incClickCounter() {
        if (clickCounter < maxValue) {
            const newClickCounter = clickCounter + 1
            setClickCounter(newClickCounter)
        }
    }

    function maxValueChange(newMaxValue: number) {
        maxValue = newMaxValue
        setOnEdit(true)
        setMaxValue(maxValue)
    }

    function startValueChange(newStartValue: number) {
        startValue = newStartValue
        setOnEdit(true)
        setStartValue(startValue)
    }

    function resetClickCounter() {
        setClickCounter(startValue)
    }

    function setCounter() {
        setOnEdit(false)
        setClickCounter(startValue)
    }

    return (
        <div className="App">
            <SetUp setClickCounter={setCounter}
                   clickCounter={clickCounter}
                   maxValue={maxValue}
                   startValue={startValue}
                   maxValueChange={maxValueChange}
                   startValueChange={startValueChange}
                   onEdit={onEdit}

            />
            <Counter incClickCounter={incClickCounter}
                     resetClickCounter={resetClickCounter}
                     clickCounter={clickCounter}
                     maxValue={maxValue}
                     startValue={startValue}
                     onEdit={onEdit}
            />
        </div>
    );
}

export default App;
