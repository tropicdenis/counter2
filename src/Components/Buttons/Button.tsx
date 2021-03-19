import React from 'react';
import s from './ButtonsStyle.module.css'

type buttonPropsType = {
    buttonName: string
    onClick: () => void
    disabler: boolean
}

function Button(props: buttonPropsType) {
    return (
        <button className={s.button1}
                onClick={props.onClick}
                disabled={props.disabler}>
            {props.buttonName}
        </button>
    );
}

export default Button;
