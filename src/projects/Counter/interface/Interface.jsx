import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Actions from "../config/actions";
import * as Pages from "../../Countries/interface/utils/Pages"

function Interface(props) {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="Counter">
            {/* title with a count badge span - and three buttons */}
            <h1>Counter</h1>
            <h4>
                Current State's Count is:
                <span className="badge">{count}</span>
            </h4>

            <div className="Buttons">
                <button onClick={() => dispatch(Actions.Increment())}>Increment</button>
                <button onClick={() => dispatch(Actions.Decrement())}>Decrement</button>
                <button onClick={() => dispatch(Actions.Reset())}>Reset</button>
            </div>
        </div>
    )
}

export default Interface;
