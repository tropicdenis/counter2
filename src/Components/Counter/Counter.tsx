import React from 'react';
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import s from './Counter.module.css'
import SetUpDisplay from "../SetUpDisplay/SetUpDisplay";
import Button from "../Buttons/Button";

type CounterPropsType = {
    incClickCounter: () => void
    resetClickCounter: () => void
    clickCounter: number
    startValue: number;
    maxValue: number
    onEdit: boolean
    setClickCounter: () => void
    maxValueChange: (newMaxValue: number) => void
    startValueChange: (startMaxValue: number) => void
    editModeSwitcher: () => void
};

function Counter(props: CounterPropsType) {
    return (<div>
            {props.onEdit && <div className={s.counter}>
                <SetUpDisplay
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    maxValueChange={props.maxValueChange}
                    startValueChange={props.startValueChange}
                />
                <div className={s.buttons}>
                    <Button onClick={props.setClickCounter}
                            disabler={(props.startValue < 0) ||
                            (props.maxValue <= props.startValue)}
                            buttonName={"set"}
                    />
                </div>
            </div>}

            {!props.onEdit &&
            <div className={s.counter}>
                <Display clickCounter={props.clickCounter}
                         maxValue={props.maxValue}
                         startValue={props.startValue}
                         onEdit={props.onEdit}
                />
                <Buttons incClickCounter={props.incClickCounter}
                         resetClickCounter={props.resetClickCounter}
                         clickCounter={props.clickCounter}
                         startValue={props.startValue}
                         maxValue={props.maxValue}
                         editModeSwitcher={props.editModeSwitcher}
                />
            </div>}
        </div>
    )
}


export default Counter;
