import React from 'react';
import s from './ButtonsStyle.module.css'
import Button from "./Button";

type buttonsPropsType = {
    incClickCounter: () => void
    resetClickCounter: () => void
    clickCounter: number
    startValue: number;
    maxValue: number
    onEdit: boolean
}

function Buttons(props: buttonsPropsType) {
    return (
        <div className={s.buttons}>
            <Button onClick={props.incClickCounter}
                    disabler={props.clickCounter === props.maxValue || props.onEdit}
                    buttonName={"inc"}
            />
            <Button onClick={props.resetClickCounter}
                    disabler={props.clickCounter === props.startValue || props.onEdit}
                    buttonName={"reset"}
            />
        </div>
    );
}


export default Buttons;
