import React from 'react';
import './styles/index.css'
import Counter from './projects/Counter/Counter';
import Countries from './projects/Countries/Countries';


function App() {
    return (
        <div className="App">
            <Counter/>
            <Countries/>
        </div>
    )
}

export default App;
