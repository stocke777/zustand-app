import React from 'react'
import { useMainContext } from './mainContext'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './reduxStore';

import useStore from './zustand';


const Child2 = () => {
    // context api
    const { state, setTitle } = useMainContext();

    // zustand
    const { count, inc } = useStore()

    // redux
    const countredux = useSelector((state) => state.count);
    const dispatch = useDispatch();

    console.log("child 2")

    return (
        <div>
            Child2 - {state.title} - <button onClick={() => setTitle("bro")}>Set Title</button>- {count} - <button onClick={inc}>Increase</button>
            <br>
            </br>
            <div>
                <p>Count: {countredux}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
        </div>
    )
}

export default Child2


