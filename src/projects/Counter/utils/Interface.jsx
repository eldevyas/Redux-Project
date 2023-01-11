import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Actions from "./../config/actions";

function Interface(props) {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="App">
            {/* title with a count badge span - and three buttons */}

            <h1>
                Current State's Count is:
                <span className="badge">{count}</span>
            </h1>

            <div className="Buttons">
                <button onClick={() => dispatch(Actions.Increment)}>Increment</button>
                <button onClick={() => dispatch(Actions.Decrement)}>Decrement</button>
                <button onClick={() => dispatch(Actions.Reset)}>Reset</button>
            </div>
        </div>
    )
}

export default App;
