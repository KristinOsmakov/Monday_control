// @flow
import * as React from 'react';
import {Button} from "./Button";
import {useState} from "react";
import s from './Counter.module.css';
import imgS from './1673513966_flomaster-club-p-yeralash-risunok-pinterest-1-removebg-preview.png'


type Props = {

};
export const Counter = (props: Props) => {

    const min = 0;
    const max = 5;
    const step = 1;

    const[count, setCount] = useState(min)
    const isCounterMax = count ===  max;
    const isCounterMin = count === min;
    const onClickInk = () => {
        if (count < max) {
            setCount(count + step);
        }
        return count;
    }
    const onClickReset = () => {
        setCount(min);
    }

    return (
        <div>
            <div className={s.containerImg}>
                <img className={isCounterMax ? s.imgRes : s.img} src={imgS}/>
            </div>
            <div className={s.container}>
                <div className={isCounterMax ? s.countResultMax : s.containerCountResult}>{count}</div>
                <progress className={s.progress} value={count} max={max}></progress>
                <div className={s.buttonContainer}>
                    <Button title={"inc"} onClick={onClickInk} disabled={isCounterMax}
                            className={isCounterMax ? s.newButton : s.button}/>
                    <Button title={"reset"} onClick={onClickReset} disabled={isCounterMin}
                            className={isCounterMin ? s.newButton : s.button}/>
                </div>
            </div>
        </div>
    );
};
