// @flow
import * as React from 'react';
import {Button} from "./Button";
import {useState} from "react";
import s from './Todolist.module.css'

type Props = {

};
export const Todolist = (props: Props) => {
    const[count, setCount] = useState(0)
    const onClickInk = () => {
        setCount(count + 1);
    }
    const onClickReset = () => {
        setCount(0);
    }

    return (
        <div className={s.container}>
            <div className={ count >= 5 ? s.countResultMax : s.containerCountResult }>{count}</div>
            <div className={s.buttonContainer}>
                <Button title={"inc"} onClick={onClickInk} disabled={count >= 5} className={count >= 5 ? s.newButton : s.button}/>
                <Button title={"reset"} onClick={onClickReset} disabled={count <= 0} className={count <= 0 ? s.newButton : s.button}/>
            </div>
        </div>
    );
};