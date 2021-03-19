import s from "../Display/Display.module.css";
import React, {ChangeEvent} from "react";


type SetUpDisplayPropsType = {
    maxValue: number
    startValue: number
    maxValueChange: (newMaxValue: number)=> void
    startValueChange: (newStartValue: number)=> void

}

function SetUpDisplay(props: SetUpDisplayPropsType) {

    const maxValueChange=(e:ChangeEvent<HTMLInputElement>)=>{
    props.maxValueChange(e.currentTarget.valueAsNumber)
        console.log(e.currentTarget.value)
    }
    const startValueChange=(e:ChangeEvent<HTMLInputElement>)=>{
    props.startValueChange(e.currentTarget.valueAsNumber)
    }

    return (
        <div className={(props.startValue < 0) ||
        (props.maxValue === props.startValue) ? s.displayRed : s.displayBlack}>
            max value:
            <input type={"number"}
                   name={"max value"}
                   value={props.maxValue}
                   onChange={maxValueChange}
            />
            start value:
            <input type={"number"}
                   name={"start value"}
                   value={props.startValue}
                   onChange={startValueChange}/>
        </div>

    );
}


export default SetUpDisplay;